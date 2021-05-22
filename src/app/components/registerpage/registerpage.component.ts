import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseserviceService } from '../services/firebaseservice.service';

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

  async onSignUp(name:string, email: string, password: string, conPass: string) {
    if(password.match(conPass)) {
      await this.firebaseService.signUp(email, password)
      if(this.firebaseService.isLoggedIn) {
        this.saveUserDetails(name, email, password);
        } 
    } else {
      console.log("password does not match")
    }
  }

  async saveUserDetails(name: string, email:string, password: string) {
    let Users = {}
    Users['name'] = name;
    Users['email'] = email;
    Users['password'] = password;
      this.firebaseService.storeUsersDetails(Users).then(res => {
        console.log("Successfully saved data to firestore")
        this.isSignedIn = true
        this.route.navigateByUrl('/home');
      }).catch(error => {
        console.log(error);
      })
  }

}
