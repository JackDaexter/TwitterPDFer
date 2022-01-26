import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {

  constructor(private http: HttpClient) { }

  private rootURL = "/api";

  sendLink(link : any){
    return this.http.post(this.rootURL + "/link", link);
  }

}
