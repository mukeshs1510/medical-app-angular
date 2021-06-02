import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddHospital } from '../../models/addhospital';
import { FirebaseserviceService } from '../../services/firebaseservice.service';

@Component({
  selector: 'app-hospitalsdetails',
  templateUrl: './hospitalsdetails.component.html',
  styleUrls: ['./hospitalsdetails.component.scss']
})
export class HospitalsdetailsComponent implements OnInit {

  id: string = "";
  hospital: AddHospital = {
    hospital_name: '',
    date: '',
    time: '',
    patient_cpr: '',
    location: '',
  }

  constructor(private route: ActivatedRoute, private firebaseService: FirebaseserviceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id != null) {
      this.firebaseService.getSpecificHospitals(this.id).subscribe(data => {
        this.hospital = data
      })
    }
  }

}
