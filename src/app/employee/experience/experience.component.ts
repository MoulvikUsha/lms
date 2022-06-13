import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

 
  skillsForm: FormGroup;
  panelOpenState = false;

  constructor(private fb: FormBuilder) { 
    this.skillsForm = this.fb.group({
      companyName: ['', Validators.required],
      experience: ['', Validators.required],
      joining: ['', Validators.required],
      relieving: ['', Validators.required],
      designation: ['', Validators.required],
      location: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
