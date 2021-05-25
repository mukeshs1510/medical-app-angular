import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddHospital } from '../models/addhospital';
import { FirebaseserviceService } from '../services/firebaseservice.service';

@Component({
  selector: 'app-addhospital',
  templateUrl: './addhospital.component.html',
  styleUrls: ['./addhospital.component.scss']
})
export class AddhospitalComponent implements OnInit {

  hospitals: AddHospital = {
    hospital_name: '',
    date: '',
    time: '',
    patient_cpr: '',
    location: '',
  }

  constructor(private firebaseService: FirebaseserviceService, private toastr: ToastrService) { }

  ngOnInit(): void {
    
  }

  addHospital() {
    if(this.hospitals.hospital_name != '' && this.hospitals.date != '' && this.hospitals.time != '' && this.hospitals.patient_cpr != '') {
      this.firebaseService.addHospitalDetails(this.hospitals);
      this.hospitals.hospital_name = '';
      this.hospitals.date = '';
      this.hospitals.time = '';
      this.hospitals.patient_cpr = '';
      this.hospitals.location = ''
      this.toastr.success("Hospital Added Successfully!", "Hospital Data")
    }
  }

}
