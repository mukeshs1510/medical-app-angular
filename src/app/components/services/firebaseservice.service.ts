import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth'
import { Users } from '../models/usermodel';
import { AddHospital } from '../models/addhospital';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseserviceService {

  isLoggedIn = false
  uid: any = null

  // hospitals: Observable<AddHospital[]>;
  hospitals: any = []
  user: Observable<Users[]>
  id: any;

  constructor(public firebaseAuth: AngularFireAuth, public firebaseFirestore: AngularFirestore,private toastr: ToastrService,
    private router: Router) { 
      this.hospitals = this.firebaseFirestore.collection('hospitals').snapshotChanges();
    
    
  }

  async signIn(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      if(res.user.emailVerified !== true) {
        this.toastMessageFaild("Please verify your mail first!","Email Verification")
      } else {
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user));
      this.router.navigateByUrl('/home')
    }
    })
  }

  async signUp(email: string, password: string, users: any) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      res.user.sendEmailVerification();
      console.log("Email verification sent")
      this.router.navigateByUrl('/login')
      this.toastMessage("Email verification mail sent!", "Email verification")
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user));
      this.storeUsersDetails(res.user.uid, users)
    })
  }

  signOut() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }

  storeUsersDetails(id: string, users: any) {
    return this.firebaseFirestore.collection("users").doc(id).set(users)
  }

  
  async getUserDetails() {
    //  let id = await this.firebaseAuth.currentUser.then(res => res.uid)
    //  return this.firebaseFirestore.collection("users").doc(id).snapshotChanges().subscribe(
    //    res => {
    //      this.user = {
    //        ...res.payload.data
    //      }
    //    }
    //  )
    this.id = await this.firebaseAuth.currentUser.then(res => res.uid)
    return await this.firebaseFirestore.collection('users').doc(this.id).snapshotChanges();
  }

  addHospitalDetails(hospitals: AddHospital) {
    return this.firebaseFirestore.collection("hospitals").add(hospitals);
  }

  getHospitals() {
    return this.hospitals;
  }

  toastMessage(textMessage: string, textTitle: string) {
    this.toastr.success(textMessage, textTitle);
  }

  toastMessageFaild(textMessage: string, textTitle: string) {
    this.toastr.info(textMessage, textTitle);
  }

}
