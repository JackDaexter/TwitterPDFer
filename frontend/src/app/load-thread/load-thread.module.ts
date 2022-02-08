import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadThreadComponent } from './load-thread.component';
import { LoadThreadRoutingModule } from './load-thread-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoadThreadComponent
  ],
  imports: [
    CommonModule,
    LoadThreadRoutingModule,
    FormsModule
  ]
})

export class LoadThreadModule{

}
