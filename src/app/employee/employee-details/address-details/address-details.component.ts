import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeDetailsComponent } from '../employee-details.component';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss']
})
export class AddressDetailsComponent implements OnInit {

  addressForm: FormGroup;
  panelOpenState = false;
  step = 0;

  constructor(private fb: FormBuilder, public empDetails: EmployeeDetailsComponent) {
    this.addressForm = this.fb.group({
      addressArray: this.fb.array([this.createAddress()])
    })
  }

  createAddress(): FormGroup {
    return this.fb.group({
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

  addContact() {
    const control = this.addressForm.get('addressArray') as FormArray;
    control.push(this.createAddress());
  }

  deleteContact(idx: number) {
    const control = <FormArray>this.addressForm.get('addressArray')
    control.removeAt(idx);
  }

  getAddress() {
    return (this.addressForm.get('addressArray') as FormArray).controls;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.addressForm.valid) {
      this.empDetails.filled3 = true
    }
  }

}
