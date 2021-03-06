import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInModule } from './sign-in/sign-in.module';
import { NavigationService } from './services/navigation.service';
import { LoadThreadModule } from './load-thread/load-thread.module';
import { LoginRoutingModule } from './login/login-routing.module';
import { LoginModule } from './login/login.module';
import { CommonModule } from '@angular/common';
import { ApiManagerService } from './services/api-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    LoadThreadModule,
    SignInModule
  ],
  providers: [
    NavigationService,
    ApiManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
