import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseserviceService } from '../../services/firebaseservice.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.scss']
})
export class RegisterpageComponent implements OnInit {
  
  isSignedIn = false

  constructor(public firebaseService: FirebaseserviceService,
    private route: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') != null) 
      this.isSignedIn = true 
      else 
      this.isSignedIn = false
  }

  async onSignUp(name:string, email: string, mobile: number, password: string, conPass: string) {
    if(password.match(conPass)) {
      let Users = {}
    Users['name'] = name;
    Users['email'] = email;
    Users['mobile'] = mobile;
    Users['password'] = password;
      await this.firebaseService.signUp(email, password, Users)
      if(this.firebaseService.isLoggedIn) {
        } 
    } else {
      console.log("password does not match")
    }
  }


}
