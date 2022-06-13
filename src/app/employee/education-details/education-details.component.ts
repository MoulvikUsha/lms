import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.scss']
})
export class EducationDetailsComponent implements OnInit {

  educationForm: FormGroup;
  panelOpenState = false;

  constructor(private fb: FormBuilder) { 
    this.educationForm = this.fb.group({
      eduType: ['', Validators.required],
      passing: ['', Validators.required],
      percentage: ['', Validators.required],
      university: ['', Validators.required],
      institute: ['', Validators.required],
      specialization: ['', Validators.required],
      state: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
