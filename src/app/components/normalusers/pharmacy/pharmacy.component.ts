import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PharmacyModel } from '../../models/PharmacyModel';
import { FirebaseserviceService } from '../../services/firebaseservice.service';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.scss']
})
export class PharmacyComponent implements OnInit {

  pharmacy: PharmacyModel[]

  constructor(private firebaseService: FirebaseserviceService, private routing: Router) { }

  ngOnInit(): void {
    this.firebaseService.getPharmacy().subscribe(ph => {
      this.pharmacy = ph
      console.log(ph)
    })
  }

  pharmacyDetails(id: string) {
    this.routing.navigateByUrl('/pharmacydetails/'+id)
  }

}
