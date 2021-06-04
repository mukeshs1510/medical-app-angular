import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentModel } from '../../models/AppointmentModel';
import { FirebaseserviceService } from '../../services/firebaseservice.service';

@Component({
  selector: 'app-manageappointments',
  templateUrl: './manageappointments.component.html',
  styleUrls: ['./manageappointments.component.scss']
})
export class ManageappointmentsComponent implements OnInit {

  appointmentModel: AppointmentModel = {
    hospital_name: '',
    date: '',
    time: '',
    patient_name: '',
    room_number: '',
  }

  id: string = ''

  constructor(private firebaseService: FirebaseserviceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    this.firebaseService.getAllAppointments(this.id).subscribe(res => {
      console.log(res)
    })
  }



}
