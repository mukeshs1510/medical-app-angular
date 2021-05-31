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
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { PharmacydetailsComponent } from './components/pharmacydetails/pharmacydetails.component';
import { Covid19Component } from './components/covid19/covid19.component';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';

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
