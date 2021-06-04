import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { HomepageComponent } from './components/normalusers/homepage/homepage.component';
import { HomehospitalComponent } from './components/hospitalsmanagement/homehospital/homehospital.component';
import { HospitalsComponent } from './components/normalusers/hospitals/hospitals.component';
import { AppointmentsComponent } from './components/normalusers/appointments/appointments.component';
import { MyaccountsComponent } from './components/normalusers/myaccounts/myaccounts.component';
import { PharmacyComponent } from './components/normalusers/pharmacy/pharmacy.component';
import { HospitalsdetailsComponent } from './components/normalusers/hospitalsdetails/hospitalsdetails.component';
import { PharmacydetailsComponent } from './components/normalusers/pharmacydetails/pharmacydetails.component';
import { Covid19Component } from './components/normalusers/covid19/covid19.component';
import { LoginpageComponent } from './components/auth/loginpage/loginpage.component';
import { RegisterpageComponent } from './components/auth/registerpage/registerpage.component';
import { RegisterhospitalComponent } from './components/auth/registerhospital/registerhospital.component';
import { HospitalaccountComponent } from './components/hospitalsmanagement/hospitalaccount/hospitalaccount.component';
import { OtherdetailsComponent } from './components/hospitalsmanagement/otherdetails/otherdetails.component';
import { ManageappointmentsComponent } from './components/hospitalsmanagement/manageappointments/manageappointments.component';
import { ManagepharmacyComponent } from './components/hospitalsmanagement/managepharmacy/managepharmacy.component';
import { ManagehospitalComponent } from './components/hospitalsmanagement/managehospital/managehospital.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {path: "", component: LoginpageComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems }},
  {path: "login", component: LoginpageComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems }},
  {path: "register", component: RegisterpageComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems }},
  {path: "registerHospital", component: RegisterhospitalComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems }},
  {path: "home", component: HomepageComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "hospitalHome", component: HomehospitalComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "manageHosp", component: ManagehospitalComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "manageHosp/:id", component: ManagehospitalComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "managePharm", component: ManagepharmacyComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "managePharm/:id", component: ManagepharmacyComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "manageAppointments", component: ManageappointmentsComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "manageAppointments/:id", component: ManageappointmentsComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "otherHosp", component: OtherdetailsComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "hospital", component: HospitalsComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "appointment", component: AppointmentsComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "appointment/:id", component: AppointmentsComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "account", component: MyaccountsComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "hospaccount", component: HospitalaccountComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "pharmacy", component: PharmacyComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "hospdetails", component: HospitalsdetailsComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "hospdetails/:id", component: HospitalsdetailsComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "pharmacydetails/:id", component: PharmacydetailsComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "pharmacydetails", component: PharmacydetailsComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "covid", component: Covid19Component,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
