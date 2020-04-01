import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Istudent } from './student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {


  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  private _url = "http://localhost:3000/";


  constructor(private _http: HttpClient) { }


  // getstuds(): Observable<Istudent[]> {
  //   alert("celled");
  //   return this._http.get<Istudent[]>(this._url, { headers: this.headers });
  // }

  public getstuds(): Observable<Istudent[]> {
    
    return this._http.get<Istudent[]>(this._url, { headers: this.headers });
  }

  public addstud(studdata) {
    
    return this._http.post<any>(this._url + "addstud", studdata);
  }

}
