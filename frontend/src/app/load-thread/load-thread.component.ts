import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiManagerService } from '../services/api-manager.service';

@Component({
  selector: 'app-load-thread',
  templateUrl: './load-thread.component.html',
  styleUrls: ['./load-thread.component.css']
})
export class LoadThreadComponent implements OnInit {

  constructor(private apimanager : ApiManagerService) { }

  ngOnInit(): void {
  }
    
  sendLink(link : string){
    const elem$ = this.apimanager.sendLink({"link" : link});
    
    elem$.subscribe(
      (elem) => {
        console.log(elem);
      },
      (err) => {

      },
      () => {
        console.log("loading completed !");
      }
    )
  }
}
