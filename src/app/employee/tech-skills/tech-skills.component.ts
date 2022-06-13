import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tech-skills',
  templateUrl: './tech-skills.component.html',
  styleUrls: ['./tech-skills.component.scss']
})
export class TechSkillsComponent implements OnInit {

  skillsForm: FormGroup;
  panelOpenState = false;

  constructor(private fb: FormBuilder) { 
    this.skillsForm = this.fb.group({
      skillType: ['', Validators.required],
      rating: ['', Validators.required],
      experience: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
