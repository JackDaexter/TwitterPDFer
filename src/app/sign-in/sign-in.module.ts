import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup,FormBuilder } from '@angular/forms';
import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';


@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    SignInRoutingModule,
    ReactiveFormsModule
  ]
})
export class SignInModule { }
