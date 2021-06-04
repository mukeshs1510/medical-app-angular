import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageHospModel } from '../../models/ManageHospModel';
import { FirebaseserviceService } from '../../services/firebaseservice.service';

@Component({
  selector: 'app-hospitalaccount',
  templateUrl: './hospitalaccount.component.html',
  styleUrls: ['./hospitalaccount.component.scss']
})
export class HospitalaccountComponent implements OnInit {

  hospitalDetails: ManageHospModel = {
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

  imageUrlDefault = "../../../../assets/map.jpg"

  imagePath: string = ''
  imageSource: string = ''

  constructor(private firebaseServices: FirebaseserviceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  editUserDetails(){}

  onLogout() {
    this.firebaseServices.signOut();
    this.router.navigateByUrl("/login")
  }

  uploadImage($event) {
    this.imagePath = $event.target.files[0]
  }

}
