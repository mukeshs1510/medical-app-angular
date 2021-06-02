import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseserviceService } from '../../services/firebaseservice.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

  isSignedIn = false

  constructor(public firebaseService: FirebaseserviceService,
    private route:Router) {}
  
  ngOnInit(): void {
    if(localStorage.getItem('user') != null) 
      this.isSignedIn = true 
      else 
      this.isSignedIn = false
  }

  async onSignIn(email: string, password: string) {
    await this.firebaseService.checkHospitalOrNormalUser(email, password)
    if(this.firebaseService.isLoggedIn) {
      this.isSignedIn = true
    }
  }

}
