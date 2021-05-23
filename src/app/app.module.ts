import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {AngularFireModule} from '@angular/fire';
import { HospitalsComponent } from './components/hospitals/hospitals.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';
import { MyaccountsComponent } from './components/myaccounts/myaccounts.component';
import { BottomnavComponent } from './components/utilitie/bottomnav/bottomnav.component';
import { NavbarrComponent } from './components/utilitie/navbarr/navbarr.component';
import { HospitalsdetailsComponent } from './components/hospitalsdetails/hospitalsdetails.component';
import { AddhospitalComponent } from './components/addhospital/addhospital.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    RegisterpageComponent,
    HomepageComponent,
    HospitalsComponent,
    AppointmentsComponent,
    PharmacyComponent,
    MyaccountsComponent,
    BottomnavComponent,
    NavbarrComponent,
    HospitalsdetailsComponent,
    AddhospitalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBS-XkBc_GDz7CxnXJ82UcNSO1LNR3PSW8",
    authDomain: "todo-angular-f6670.firebaseapp.com",
    projectId: "todo-angular-f6670",
    storageBucket: "todo-angular-f6670.appspot.com",
    messagingSenderId: "1064831245824",
    appId: "1:1064831245824:web:035dfdffc2ba030d7042e5",
    measurementId: "G-88J244BGNM"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
