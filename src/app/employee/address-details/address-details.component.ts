import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent implements OnInit {

  addressForm: FormGroup;
  panelOpenState = false;

  constructor(private fb: FormBuilder) { 
    this.addressForm = this.fb.group({
      addressType: ['', Validators.required],
      door: ['', Validators.required],
      street: ['', Validators.required],
      locality: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pinCode: ['', Validators.required],
      landMark: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }

}
