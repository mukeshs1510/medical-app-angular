import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseserviceService } from '../../services/firebaseservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private firebaseServices: FirebaseserviceService,
    private route: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    this.firebaseServices.signOut();
    this.route.navigateByUrl("/login")
  }

}
