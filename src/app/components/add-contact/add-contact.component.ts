import { ContactServiceService } from './../../services/contact/contact-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  citiesAndStates = [
    {state: 'Delhi', cities: ['Delhi']},
    {state: 'Rajasthan' ,cities:['Kota', 'Jaipur', 'Jaisalmer', 'Bikaner']},
    {state: 'Maharashtra', cities: ['Pune', 'Mumbai', 'Nagpur']},
    {state: 'Uttranchal', cities: ['Badrinath', 'Kedarnath', 'Manali']},
    {state: 'Punjab', cities: ['Amritsar', 'Chandigarh', 'DEF', 'GHI']}
  ]

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private contactService: ContactServiceService,
              private router: Router) {
              }

  ngOnInit(){
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
    })
    console.log(this.citiesAndStates);
  }

  onSubmit(){
    // console.log(this.form.value);
    if (this.form.valid){
      console.log('form valid');
      const requestObj = {
        address: this.form.value.address,
        city: this.form.value.city,
        email: this.form.value.email,
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        phone: this.form.value.phone,
        state: this.form.value.state,
        zip: this.form.value.zip
      };
      this.contactService.addContact(requestObj).subscribe((response) => {
        console.log(response);
        this.router.navigateByUrl('home');
      }, (err) => {
        console.log(err);
      });

    }else{
      return;
    }
  }

  cancel(){
    this.router.navigateByUrl('home');
  }

  cities: any[];
  setCities(state: any){
    console.log(state);
    this.cities = state.cities;
  }

}
