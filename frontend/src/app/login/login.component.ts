import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  list : string[] = ["cinéma"]

  constructor() { }

  ngOnInit(): void {
  }


  addNewElement(e : any){
    this.list.push(e);
  }

}
