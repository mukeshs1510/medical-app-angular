import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import {AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { HospitalsComponent } from './components/hospitals/hospitals.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { MyaccountsComponent } from './components/myaccounts/myaccounts.component';
import { PharmacyComponent } from './components/pharmacy/pharmacy.component';
import { HospitalsdetailsComponent } from './components/hospitalsdetails/hospitalsdetails.component';
import { AddhospitalComponent } from './components/addhospital/addhospital.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);
const redirectLoggedInToItems = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {path: "", component: LoginpageComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems }},
  {path: "login", component: LoginpageComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems }},
  {path: "register", component: RegisterpageComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToItems }},
  {path: "home", component: HomepageComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "hospital", component: HospitalsComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "appointment", component: AppointmentsComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "account", component: MyaccountsComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "pharmacy", component: PharmacyComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "hospdetails", component: HospitalsdetailsComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "hospdetails/:id", component: HospitalsdetailsComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: "addhospital", component: AddhospitalComponent,canActivate:  [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
