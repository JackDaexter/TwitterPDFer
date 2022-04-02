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
    const elem$ = this.apimanager.sendLink({"link" : link, "type" : type});

    elem$.subscribe(
      (elem) => {
        console.log("TYPE IS " + type);
        if(type === 2){
          var blob = new Blob([elem],{type:'text/plain',endings:'native'});
          var file = new File([blob],"thread.txt")
          
          this.downloadFile(file)
        }
        else{
          var pdf = window.URL.createObjectURL(new Blob([elem], { type: "application/pdf" }));
          window.open(pdf);
        }
    
        
      },
      (err) => {
      },
      () => {
        console.log("loading completed !");
      })
  }

  downloadFile(file:File) {
    // Create a link and set the URL using `createObjectURL`
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = URL.createObjectURL(file);
    link.download = file.name;

    // It needs to be added to the DOM so it can be clicked
    document.body.appendChild(link);
    link.click();

    // To make this work on Firefox we need to wait
    // a little while before removing it.
    setTimeout(() => {
        URL.revokeObjectURL(link.href);
        link.parentNode?.removeChild(link);
    }, 0);  
  }
}
