import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managepharmacy',
  templateUrl: './managepharmacy.component.html',
  styleUrls: ['./managepharmacy.component.scss']
})
export class ManagepharmacyComponent implements OnInit {

  hasPharmacy: boolean = false
  noPharmacy: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  showForm( ) {
    this.hasPharmacy = true
    this.noPharmacy = false
  }

  cancleAddingPharm() {
    this.hasPharmacy = false
    this.noPharmacy = true
  }

}
