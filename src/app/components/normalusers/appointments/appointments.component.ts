import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddHospital } from '../../models/addhospital';
import { FirebaseserviceService } from '../../services/firebaseservice.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  hospitals: AddHospital[]

  hospitalName: string = ""
  selectedHospital: string = ""

  constructor(private firebaseService: FirebaseserviceService, private routing: Router) { }

  async ngOnInit(): Promise<void> {
    (await this.firebaseService.getHospitalsForSelect()).subscribe(hosp => {
      this.hospitals = hosp
    })
  }

  selecteHospital() {
    console.log(this.selectedHospital)
  }

}
