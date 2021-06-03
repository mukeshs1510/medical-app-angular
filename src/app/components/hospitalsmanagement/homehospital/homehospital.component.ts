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

  ngOnInit(): void {
  }

  async manageHosp() {
    await this.firebaseAuth.currentUser.then(res => {
      this.uidHosp = res.uid
      this.router.navigateByUrl("/manageHosp/"+this.uidHosp)
    })

  }

}
