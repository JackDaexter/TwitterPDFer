import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadThreadComponent } from './load-thread.component';
import { LoadThreadRoutingModule } from './load-thread-routing.module';




@NgModule({
  declarations: [
    LoadThreadComponent
  ],
  imports: [
    CommonModule,
    LoadThreadRoutingModule
  ]
})

export class LoadThreadModule{

}
