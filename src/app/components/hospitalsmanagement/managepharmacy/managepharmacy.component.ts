import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PharmacyModel } from '../../models/PharmacyModel';
import { FirebaseserviceService } from '../../services/firebaseservice.service';

@Component({
  selector: 'app-managepharmacy',
  templateUrl: './managepharmacy.component.html',
  styleUrls: ['./managepharmacy.component.scss']
})
export class ManagepharmacyComponent implements OnInit {

  hasPharmacy: boolean = false
  noPharmacy: boolean = true

  pharmacy: PharmacyModel = {
    pharmacy_name: '',
    timing: '',
    location: '',
    shopkeep_name: '',
    mobile: '',
  }

  uid: string = ""

  constructor(private firebaseService: FirebaseserviceService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.uid = this.activatedRoute.snapshot.paramMap.get("id")
  }

  showForm( ) {
    this.hasPharmacy = true
    this.noPharmacy = false
  }

  cancleAddingPharm() {
    this.hasPharmacy = false
    this.noPharmacy = true
  }

  addingPharm(){
    this.firebaseService.addPharmacyIntoHospital(this.pharmacy, this.uid).then(res => {
      alert("Pharmacy Added")
    })
  }

}
