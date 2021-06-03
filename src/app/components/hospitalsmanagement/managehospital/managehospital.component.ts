import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManageHospModel } from '../../models/ManageHospModel';
import { FirebaseserviceService } from '../../services/firebaseservice.service';

@Component({
  selector: 'app-managehospital',
  templateUrl: './managehospital.component.html',
  styleUrls: ['./managehospital.component.scss']
})
export class ManagehospitalComponent implements OnInit {

  hospitalDetails: ManageHospModel = {
    hospital_name: "",
    location: "",
    time: "",
    imageUrl: "",
    remaining_bed: "",
  }
  uidHosp: string = ""

  constructor(private firebaseService: FirebaseserviceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.uidHosp = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.uidHosp != null) {
      this.firebaseService.getSpecificManegedHospital(this.uidHosp).subscribe(res => {
        this.hospitalDetails = res
      })
    }
  }

}
