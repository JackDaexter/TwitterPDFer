import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-thread',
  templateUrl: './load-thread.component.html',
  styleUrls: ['./load-thread.component.css']
})
export class LoadThreadComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  myfunction(event : any) {
    console.log(event);
  }


}
