import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PharmacyModel } from '../models/PharmacyModel';
import { FirebaseserviceService } from '../services/firebaseservice.service';

@Component({
  selector: 'app-addpharmacy',
  templateUrl: './addpharmacy.component.html',
  styleUrls: ['./addpharmacy.component.scss']
})
export class AddpharmacyComponent implements OnInit {

  pharmacies: PharmacyModel = {
    pharmacy_name: '',
    timing: '',
    location: '',
  }

  constructor(private firebaseService: FirebaseserviceService, private routing: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }


  addPharmacy() {
    if(this.pharmacies.pharmacy_name != '' && this.pharmacies.location != '' && this.pharmacies.timing != '') {
      this.firebaseService.addPharmacyDetails(this.pharmacies);
      this.pharmacies.pharmacy_name = '';
      this.pharmacies.timing = '';
      this.pharmacies.location = '';
      this.toastr.success("Pharmacy Added Successfully!", "Pharmacy Data")
    }
  }

}
