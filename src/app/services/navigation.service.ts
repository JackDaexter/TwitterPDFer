import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private history : string[] = [];

  constructor(private router: Router, private location : Location) { 
    this.router.events.subscribe((e) => {
      if(e instanceof NavigationEnd){
        this.history.push(e.urlAfterRedirects);
      }
    })
  }

  back() : void{
    this.history.pop();
    if(this.history.length > 0){
      this.location.back();
    }
    else{
      console.log("Back history size : " + this.history.length);
      this.router.navigateByUrl("/");
    }
  }


}
