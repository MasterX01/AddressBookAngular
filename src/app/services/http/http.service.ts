import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  post(url, data){
    return this.http.post(this.baseUrl+url, data, this.options)
  }
  get(url){
    return this.http.get(this.baseUrl+url, this.options)
  }
}
