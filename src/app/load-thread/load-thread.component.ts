import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-load-thread',
  templateUrl: './load-thread.component.html',
  styleUrls: ['./load-thread.component.css']
})
export class LoadThreadComponent implements OnInit {

  @Output() newItemEvent  = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  addNewEvent(value : any){
    this.newItemEvent.emit(value);
  }
}
