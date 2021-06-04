import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddHospital } from '../../models/addhospital';
import { AppointmentModel } from '../../models/AppointmentModel';
import { FirebaseserviceService } from '../../services/firebaseservice.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

  hospitals: AddHospital[]

  appointments: AppointmentModel = {
    hospital_name: '',
    date: "",
    time: "",
    room_number: "",
    patient_name: "",
  }

  hospitalName: string = ""

  id: string = ''
  showSelectionOfHosp: boolean = true
  showSelectedHosp: boolean = false
  showSelectedHospName: string = ""

  constructor(private firebaseService: FirebaseserviceService, private routing: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id != null) {
      this.showSelectionOfHosp = false
      this.showSelectedHosp = true
      this.onSelectedItemChange(this.id)
    } else {
      this.showSelectedHosp = false
      this.showSelectionOfHosp = true;
      (await this.firebaseService.getHospitalsForSelect()).subscribe(hosp => {
        this.hospitals = hosp
      })
    }
  }

  onItemChange(id: string) {
    this.firebaseService.getSpecificHospitals(id).subscribe(data => {
      this.hospitalName = data['hospital_name']
      this.appointments.hospital_name = this.hospitalName
      this.id = id
      console.log(this.hospitalName)
    })
  }
  onSelectedItemChange(id: string) {
    this.firebaseService.getSpecificHospitals(id).subscribe(data => {
      this.showSelectedHospName = data['hospital_name']
      this.hospitalName = this.showSelectedHospName
      this.appointments.hospital_name = this.showSelectedHospName
      this.id = id
    })
  }

  submitAppointment() {
    if(this.hospitalName != '' && this.appointments.date != ""
    && this.appointments.time != ""
    && this.appointments.room_number != ""
    && this.appointments.patient_name != "") {
      this.firebaseService.addAppontmentToSpecificHospital(this.appointments, this.id).then(res => {
        this.hospitalName = '' 
        this.appointments.date = ""
        this.appointments.time = ""
        this.appointments.room_number = ""
        this.appointments.patient_name = ""
      });
    }
  }

}
