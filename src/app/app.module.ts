import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {AngularFireModule} from '@angular/fire'

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    RegisterpageComponent,
    HomepageComponent
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
