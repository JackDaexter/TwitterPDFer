import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ApiManagerService } from '../services/api-manager.service';

@Component({
  selector: 'app-load-thread',
  templateUrl: './load-thread.component.html',
  styleUrls: ['./load-thread.component.css']
})
export class LoadThreadComponent implements OnInit {

  theLink : string = "";
  @ViewChild('link') linked : ElementRef;

  constructor(private apimanager : ApiManagerService) { }

  ngOnInit(): void {
  }

  // ^"https:\/\/twitter.com"$[a-zA-Z0-9]*

  removeSupperflu(){

    var allTheLink = this.theLink.trim().replace(/\s/g, '');
    var reg = new RegExp('^https:\/\/twitter\.com\/[a-zA-Z0-9\/]*');
        
    return reg.test(allTheLink);
  }

  generate(link : string, type : number){
    const blob = new Blob();
    const elem$ = this.apimanager.sendLink({"link" : link, "type" : type});

    
    elem$.subscribe(
      (elem: any) => {
        const blob = new Blob(elem);

      },
      (err) => {
      },
      () => {
        console.log("loading completed !");
  })
  }
}
