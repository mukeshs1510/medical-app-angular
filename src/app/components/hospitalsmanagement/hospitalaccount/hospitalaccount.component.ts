import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseserviceService } from '../../services/firebaseservice.service';

@Component({
  selector: 'app-hospitalaccount',
  templateUrl: './hospitalaccount.component.html',
  styleUrls: ['./hospitalaccount.component.scss']
})
export class HospitalaccountComponent implements OnInit {

  constructor(private firebaseServices: FirebaseserviceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  editUserDetails(){}

  onLogout() {
    this.firebaseServices.signOut();
    this.router.navigateByUrl("/login")
  }

}
