import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateComponent } from './../update/update.component';
import { ContactServiceService } from './../../services/contact/contact-service.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contactList: any;
  constructor(private contactService: ContactServiceService, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts(){
    this.contactService.getAllContacts().subscribe((response: any) => {
      console.log(response);
      this.contactList = response.obj;
    })
  }

  delete(id){
    this.contactService.deleteEmployee(id).subscribe((response) => {
      console.log("Deletion SuccessFull")
      this.getAllContacts();
    });
  }

  update(contact){
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '70%',
      height: '85%',
      data: {contact}
    });
    this.getAllContacts();
  }

  addNewContact(){
    console.log('redirecting now');
    this.router.navigateByUrl('add')
  }
}
