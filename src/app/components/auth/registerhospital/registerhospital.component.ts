import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageHospModel } from '../../models/ManageHospModel';
import { FirebaseserviceService } from '../../services/firebaseservice.service';

@Component({
  selector: 'app-registerhospital',
  templateUrl: './registerhospital.component.html',
  styleUrls: ['./registerhospital.component.scss']
})
export class RegisterhospitalComponent implements OnInit {

  isSignedIn = false

  hospital: ManageHospModel = {
    hospital_name: "",
    location: "",
    timing: "",
    imageUrl: "",
    remaining_bed: "",
    owner_name: "",
    email: "",
    mobile: "",
    password: "",
    pharmacy_name: "",
  }

  constructor(public firebaseService: FirebaseserviceService,
    private route: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('user') != null) 
      this.isSignedIn = true 
      else 
      this.isSignedIn = false
  }
  async onSignUpHospital(
    email: string,
    password: string,
    conPass: string
  ) {
    if(password.match(conPass)) {
      await this.firebaseService.signUpHospital(email, password, this.hospital)
      if(this.firebaseService.isLoggedIn) {
        } 
    } else {
      console.log("password does not match")
    }
  }

}
