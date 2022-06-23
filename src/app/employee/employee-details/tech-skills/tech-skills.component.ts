import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeDetailsComponent } from '../employee-details.component';

@Component({
  selector: 'app-tech-skills',
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.scss']
})
export class TechSkillsComponent implements OnInit {

  skillsForm: FormGroup;
  panelOpenState = false;
  step = 0;

  constructor(private fb: FormBuilder, public empDetails: EmployeeDetailsComponent) {
    this.skillsForm = this.fb.group({
      skillsArray: this.fb.array([this.createSkill()])
    })
  }

  createSkill(): FormGroup {
    return this.fb.group({
      skillType: ['', Validators.required],
      rating: ['', Validators.required],
      experience: ['', Validators.required],
    })
  }

  addContact() {
    const control = this.skillsForm.get('skillsArray') as FormArray;
    control.push(this.createSkill());
  }

  deleteContact(idx: number) {
    const control = <FormArray>this.skillsForm.get('skillsArray')
    control.removeAt(idx);
  }

  getSkills() {
    return (this.skillsForm.get('skillsArray') as FormArray).controls;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.skillsForm.valid) {
      this.empDetails.filled6 = true
    }
  }
}
