import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  id: string = ''

  constructor(private firebaseService: FirebaseserviceService, private routing: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    (await this.firebaseService.getHospitalsForSelect()).subscribe(hosp => {
      this.hospitals = hosp
    })
  }

  selecteHospital() {
    console.log(this.selectedHospital)
  }

}
