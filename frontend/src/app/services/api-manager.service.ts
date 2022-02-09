import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {

  constructor(private http: HttpClient) { }

  private rootURL = "/api";

  sendLink(link : any){
    return this.http
               .post<any>(this.rootURL + "/link", link,{
                responseType: "arraybuffer" as "json"
               })
  }

}
