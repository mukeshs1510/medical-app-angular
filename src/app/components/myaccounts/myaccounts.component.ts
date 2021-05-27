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

  user: Users = {
    name: '',
    email: '',
    password: '',
  }

  id: any = ''

  constructor(private firebaseService: FirebaseserviceService, private router: Router,
    public firebaseAuth: AngularFireAuth, public firebaseFirestore: AngularFirestore) { }

  async ngOnInit() {
   await this.firebaseAuth.currentUser.then(res => this.id = res.uid)
    if(this.id != null) {
      this.firebaseService.getUserDetails(this.id).subscribe(data => {
        this.user.name = data['name']
        this.user.email = data['email']
        this.user.password = data['password']
      })
    }
  }

  onLogout() {
    this.firebaseService.signOut();
    this.router.navigateByUrl('/login')
  }

}
