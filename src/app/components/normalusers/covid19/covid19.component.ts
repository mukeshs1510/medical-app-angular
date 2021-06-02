import { Component, OnInit } from '@angular/core';
import { CovidModel } from '../../models/CovidModel';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.scss']
})
export class Covid19Component implements OnInit {

  covidModel: CovidModel = {
    isPositive: 'nagative',
    hadVaccine: 'no',
    time: '',
    typeOfVaccine: 'cowin',
    chooseLocation: '',
    vaccinedLocation: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

  saveDetailsCovid() {}

}
