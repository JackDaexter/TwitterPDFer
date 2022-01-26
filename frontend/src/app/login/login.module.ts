import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoadThreadComponent } from '../load-thread/load-thread.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    LoginComponent,
    LoadThreadComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
