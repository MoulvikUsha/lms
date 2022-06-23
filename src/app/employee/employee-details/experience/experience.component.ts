import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeDetailsComponent } from '../employee-details.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

 
  experienceForm: FormGroup;
  panelOpenState = false;
  step = 0;

  constructor(private fb: FormBuilder, public empDetails: EmployeeDetailsComponent) { 
    this.experienceForm = this.fb.group({
      experienceArray: this.fb.array([this.createExperience()])
    })
  }

  createExperience(): FormGroup {
    return this.fb.group({
      companyName: ['', Validators.required],
      experience: ['', Validators.required],
      joining: ['', Validators.required],
      relieving: ['', Validators.required],
      designation: ['', Validators.required],
      location: ['', Validators.required],
    })
  }

  addContact() {
    const control = this.experienceForm.get('experienceArray') as FormArray;
    control.push(this.createExperience());
  }

  deleteContact(idx: number) {
    const control = <FormArray>this.experienceForm.get('experienceArray')
    control.removeAt(idx);
  }

  getExperience() {
    return (this.experienceForm.get('experienceArray') as FormArray).controls;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.experienceForm.valid) {
      this.empDetails.filled7 = true
    }
  }
}
