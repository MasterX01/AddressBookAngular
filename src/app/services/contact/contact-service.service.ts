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
  deleteEmployee(id){
    return this.http.delete('delete' + id)
  }
  updateContact(id, data){
    return this.http.update('update/' + id, data)
  }
}
