import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private http: HttpService) { }

  addContact(data){
    return this.http.post('addperson',data)
  }
  getAllContacts(){
    return this.http.get('all')
  }
}
