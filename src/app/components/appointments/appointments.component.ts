import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddHospital } from '../models/addhospital';
import { FirebaseserviceService } from '../services/firebaseservice.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  hospitals: AddHospital[]

  hospitalName: string = ""

  constructor(private firebaseService: FirebaseserviceService, private routing: Router) { }

  ngOnInit(): void {
    this.firebaseService.getHospitals().subscribe(hosp => {
      this.hospitals = hosp
    })
  }

  selectedHospital(id: any, hospital_name: string) {
    this.hospitalName = hospital_name
    console.log(hospital_name)
  }

}
