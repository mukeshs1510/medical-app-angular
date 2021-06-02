import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import { BottomnavComponent } from './components/utilitie/bottomnav/bottomnav.component';
import { NavbarrComponent } from './components/utilitie/navbarr/navbarr.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { LoginpageComponent } from './components/auth/loginpage/loginpage.component';
import { RegisterpageComponent } from './components/auth/registerpage/registerpage.component';
import { HomepageComponent } from './components/normalusers/homepage/homepage.component';
import { HospitalsComponent } from './components/normalusers/hospitals/hospitals.component';
import { AppointmentsComponent } from './components/normalusers/appointments/appointments.component';
import { PharmacyComponent } from './components/normalusers/pharmacy/pharmacy.component';
import { MyaccountsComponent } from './components/normalusers/myaccounts/myaccounts.component';
import { HospitalsdetailsComponent } from './components/normalusers/hospitalsdetails/hospitalsdetails.component';
import { PharmacydetailsComponent } from './components/normalusers/pharmacydetails/pharmacydetails.component';
import { Covid19Component } from './components/normalusers/covid19/covid19.component';
import { RegisterhospitalComponent } from './components/auth/registerhospital/registerhospital.component';
import { HomehospitalComponent } from './components/hospitalsmanagement/homehospital/homehospital.component';
import { ManagehospitalComponent } from './components/hospitalsmanagement/managehospital/managehospital.component';
import { ManagepharmacyComponent } from './components/hospitalsmanagement/managepharmacy/managepharmacy.component';
import { ManageappointmentsComponent } from './components/hospitalsmanagement/manageappointments/manageappointments.component';
import { OtherdetailsComponent } from './components/hospitalsmanagement/otherdetails/otherdetails.component';
import { HospitalaccountComponent } from './components/hospitalsmanagement/hospitalaccount/hospitalaccount.component';
import { NavbarhospitalComponent } from './components/utilitie/navbarhospital/navbarhospital.component';
import { BottomnavhospitalComponent } from './components/utilitie/bottomnavhospital/bottomnavhospital.component';

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
    PharmacydetailsComponent,
    Covid19Component,
    RegisterhospitalComponent,
    HomehospitalComponent,
    ManagehospitalComponent,
    ManagepharmacyComponent,
    ManageappointmentsComponent,
    OtherdetailsComponent,
    HospitalaccountComponent,
    NavbarhospitalComponent,
    BottomnavhospitalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(), 
    FormsModule,
    BrowserAnimationsModule, // required animations module
    CommonModule,
    AngularFireModule.initializeApp(
      environment.firebase
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
