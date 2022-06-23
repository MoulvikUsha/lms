import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeDetailsComponent } from '../employee-details.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  contactForm: FormGroup;
  panelOpenState = false;
  contactsArray: FormArray | any;
  step = 0;

  constructor(private fb: FormBuilder, public empDetails: EmployeeDetailsComponent) {
    this.contactForm = this.fb.group({
      contactsArray: this.fb.array([this.createContact()])
    })
  }

  createContact(): FormGroup {
    return this.fb.group({
      contactType: ["", [Validators.required]],
      contactNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    })
  }

  addContact() {
    const control = this.contactForm.get('contactsArray') as FormArray;
    control.push(this.createContact());
  }

  deleteContact(idx: number) {
    const control = <FormArray>this.contactForm.get('contactsArray')
    control.removeAt(idx);
  }

  getContact() {
    return (this.contactForm.get('contactsArray') as FormArray).controls;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.empDetails.filled8 = true
    }
  }
}
