import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadThreadComponent } from './load-thread.component';

const routes: Routes = [ 
  { path:'', component: LoadThreadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LoadThreadRoutingModule { }

