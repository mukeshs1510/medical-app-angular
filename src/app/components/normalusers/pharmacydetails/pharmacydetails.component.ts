import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PharmacyModel } from '../../models/PharmacyModel';
import { FirebaseserviceService } from '../../services/firebaseservice.service';

@Component({
  selector: 'app-pharmacydetails',
  templateUrl: './pharmacydetails.component.html',
  styleUrls: ['./pharmacydetails.component.scss']
})
export class PharmacydetailsComponent implements OnInit {

  id?: string = "";
  pharmacy: PharmacyModel = {
    pharmacy_name: '',
    timing: '',
    location: '',
  }

  constructor(private route: ActivatedRoute, private firebaseService: FirebaseserviceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id != null) {
      this.firebaseService.getSpecificPharmacy(this.id).subscribe(data => {
        this.pharmacy = data
      })
    }
  }

}
