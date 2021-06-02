import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseserviceService } from '../../services/firebaseservice.service';

@Component({
  selector: 'app-registerhospital',
  templateUrl: './registerhospital.component.html',
  styleUrls: ['./registerhospital.component.scss']
})
export class RegisterhospitalComponent implements OnInit {

  isSignedIn = false

  constructor(public firebaseService: FirebaseserviceService,
    private route: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') != null) 
      this.isSignedIn = true 
      else 
      this.isSignedIn = false
  }
  async onSignUpHospital(
    hospname: string,
    email: string,
    location: string,
    password: string,
    conPass: string,
    timing: string
  ) {
    if(password.match(conPass)) {
      let Hosptial = {}
    Hosptial['hospital_name'] = hospname;
    Hosptial['email'] = email;
    Hosptial['location'] = location;
    Hosptial['password'] = password;
    Hosptial['timing'] = timing;
      await this.firebaseService.signUpHospital(email, password, Hosptial)
      if(this.firebaseService.isLoggedIn) {
        } 
    } else {
      console.log("password does not match")
    }
  }

}
