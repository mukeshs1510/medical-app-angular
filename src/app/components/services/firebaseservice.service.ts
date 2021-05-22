import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth'
import { Users } from '../models/usermodel';

@Injectable({
  providedIn: 'root'
})
export class FirebaseserviceService {

  isLoggedIn = false
  users: Users

  constructor(public firebaseAuth: AngularFireAuth, public firebaseFirestore: AngularFirestore) { }

  async signIn(email: string, password: string) {
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res => {
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user));
    })
  }

  async signUp(email: string, password: string) {
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res => {
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user));
    })
  }

  signOut() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('user');
  }


  storeUsersDetails(Users) {
    return this.firebaseFirestore.collection("users").add(Users)
  }


}
