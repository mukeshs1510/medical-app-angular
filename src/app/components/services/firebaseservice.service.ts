import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth'
import { Users } from '../models/usermodel';
import { AddHospital } from '../models/addhospital';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { PharmacyModel } from '../models/PharmacyModel';

@Injectable({
  providedIn: 'root'
})
export class FirebaseserviceService {

  isLoggedIn = false
  uid: any = null

  user: any = []
  id: any;

  hospitals: any = []
  pharmacy: any = []
  users: any = []

  constructor(public firebaseAuth: AngularFireAuth, public firebaseFirestore: AngularFirestore,private toastr: ToastrService,
    private router: Router) { 
      // this.hospitals = this.firebaseFirestore.collection('hospitals').snapshotChanges();
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
  
  getUserDetails(id: string) {
    this.users = this.firebaseFirestore.collection("users").doc(id).valueChanges()
    return this.users;
  }

  addHospitalDetails(hospitals: AddHospital) {
    return this.firebaseFirestore.collection("hospitals").add(hospitals);
  }

  addPharmacyDetails(pharmacy: PharmacyModel) {
    return this.firebaseFirestore.collection("pharmacy").add(pharmacy);
  }

  getHospitals() {
    // return this.hospitals;
    return this.firebaseFirestore.collection("hospitals").snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const id = a.payload.doc.id;
        const data = a.payload.doc.data() as any;
        return { id, ...data }; 
      }))
    );
  }

  getSpecificHospitals(id: string) {
    this.hospitals = this.firebaseFirestore.collection("hospitals").doc(id).valueChanges()
    return this.hospitals;
  }

  getPharmacy() {
    return this.firebaseFirestore.collection("pharmacy").snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getSpecificPharmacy(id: string) {
    this.pharmacy = this.firebaseFirestore.collection("pharmacy").doc(id).valueChanges()
    return this.pharmacy;
  }

  toastMessage(textMessage: string, textTitle: string) {
    this.toastr.success(textMessage, textTitle);
  }

  toastMessageFaild(textMessage: string, textTitle: string) {
    this.toastr.info(textMessage, textTitle);
  }

}
