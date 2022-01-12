import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoadThreadComponent } from './load-thread/load-thread.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'sign-in', loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule) },
  { path: 'loadthread', loadChildren: () => import('./load-thread/load-thread.module').then(x => x.LoadThreadModule) },
  { path: '', redirectTo:'/home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
