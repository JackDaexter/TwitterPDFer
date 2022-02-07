import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ApiManagerService } from '../services/api-manager.service';

@Component({
  selector: 'app-load-thread',
  templateUrl: './load-thread.component.html',
  styleUrls: ['./load-thread.component.css']
})
export class LoadThreadComponent implements OnInit {

  init : Boolean = false;

  @ViewChild('link') linked : ElementRef;
  @ViewChild('PdfChoice') pdfchoice : ElementRef;
  @ViewChild('RawChoice') rawchoice : ElementRef;

  constructor(private apimanager : ApiManagerService) { }

  ngOnInit(): void {
  }
    
  sendLink(link : string){    

    const elem$ = this.apimanager.sendLink({"link" : link});
    if(this.pdfchoice.nativeElement.checked || this.rawchoice.nativeElement.checked){
      this.init = true;

      elem$.subscribe(
          (elem) => {
            console.log(elem);
          },
          (err) => {
    
          },
          () => {
            console.log("loading completed !");
      })
    }
  }
}
