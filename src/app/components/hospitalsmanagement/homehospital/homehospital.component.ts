import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homehospital',
  templateUrl: './homehospital.component.html',
  styleUrls: ['./homehospital.component.scss']
})
export class HomehospitalComponent implements OnInit {

  uidHosp: string = ""

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) { }

  async ngOnInit() {
    await this.firebaseAuth.currentUser.then(res => {
      this.uidHosp = res.uid
    })
  }

  async manageHosp() {
      this.router.navigateByUrl("/manageHosp/"+this.uidHosp)
  }

  goToAppointments() {
    this.router.navigateByUrl("/manageAppointments/"+this.uidHosp)
  }

  goToPharm(){
    this.router.navigateByUrl("/managePharm/"+this.uidHosp)
  }

}
