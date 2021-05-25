import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Users } from '../models/usermodel';
import { FirebaseserviceService } from '../services/firebaseservice.service';

@Component({
  selector: 'app-myaccounts',
  templateUrl: './myaccounts.component.html',
  styleUrls: ['./myaccounts.component.scss']
})
export class MyaccountsComponent implements OnInit {

  users: any = []

  userName: string = ''
  userEmail: string = ''
  userMobile: string = ''

  id: any

  constructor(private firebaseService: FirebaseserviceService, private router: Router,
    public firebaseAuth: AngularFireAuth, public firebaseFirestore: AngularFirestore) { }

  ngOnInit(): void {
    this.firebaseService.getUserDetails()
    
  }

  onLogout() {
    this.firebaseService.signOut();
    this.router.navigateByUrl('/login')
  }

}
