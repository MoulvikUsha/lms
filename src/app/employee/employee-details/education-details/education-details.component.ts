import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeDetailsComponent } from '../employee-details.component';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.scss']
})
export class EducationDetailsComponent implements OnInit {

  educationForm: FormGroup;
  panelOpenState = false;
  step = 0;

  constructor(private fb: FormBuilder, public empDetails: EmployeeDetailsComponent) {
    this.educationForm = this.fb.group({
      educationArray: this.fb.array([this.createContact()])
    })
  }

  createContact(): FormGroup {
    return this.fb.group({
      eduType: ['', Validators.required],
      passing: ['', Validators.required],
      percentage: ['', Validators.required],
      university: ['', Validators.required],
      institute: ['', Validators.required],
      specialization: ['', Validators.required],
      state: ['', Validators.required],
    })
  }

  addContact() {
    const control = this.educationForm.get('educationArray') as FormArray;
    control.push(this.createContact());
  }

  deleteContact(idx: number) {
    const control = <FormArray>this.educationForm.get('educationArray')
    control.removeAt(idx);
  }

  getEduDetails() {
    return (this.educationForm.get('educationArray') as FormArray).controls;
  }
  ngOnInit(): void {
  }

  onSubmit() {
    if (this.educationForm.valid) {
      this.empDetails.filled2 = true
    }
  }
}
