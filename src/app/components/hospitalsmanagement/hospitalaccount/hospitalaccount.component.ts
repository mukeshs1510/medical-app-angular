import { Component, OnInit } from '@angular/core';
import { FirebaseserviceService } from '../../services/firebaseservice.service';

@Component({
  selector: 'app-hospitalaccount',
  templateUrl: './hospitalaccount.component.html',
  styleUrls: ['./hospitalaccount.component.scss']
})
export class HospitalaccountComponent implements OnInit {

  constructor(private firebaseServices: FirebaseserviceService) { }

  ngOnInit(): void {
  }

  editUserDetails(){}

  onLogout() {
    this.firebaseServices.signOut();
  }

}
