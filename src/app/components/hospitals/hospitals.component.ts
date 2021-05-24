import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddHospital } from '../models/addhospital';
import { FirebaseserviceService } from '../services/firebaseservice.service';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})
export class HospitalsComponent implements OnInit {

  hospitals: AddHospital[]

  constructor(private firebaseService: FirebaseserviceService, private routing: Router) { }

  ngOnInit(): void {
    this.firebaseService.getHospitals().subscribe(hosp => {
      this.hospitals = hosp
    })
  }

  hospDetails(id: string) {
    this.routing.navigateByUrl('/hospdetails/'+id)
  }

}
