import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../models/usermodel';
import { FirebaseserviceService } from '../services/firebaseservice.service';

@Component({
  selector: 'app-myaccounts',
  templateUrl: './myaccounts.component.html',
  styleUrls: ['./myaccounts.component.scss']
})
export class MyaccountsComponent implements OnInit {

  users: Users[]

  userName: string = ''
  userEmail: string = ''
  userMobile: string = ''

  constructor(private firebaseService: FirebaseserviceService, private router: Router) { }

  ngOnInit(): void {
    this.firebaseService.getUserDetails().then(res => console.log(res.subscribe(res => console.log(res.ref.id))))
  }

  onLogout() {
    this.firebaseService.signOut();
    this.router.navigateByUrl('/login')
  }

}
