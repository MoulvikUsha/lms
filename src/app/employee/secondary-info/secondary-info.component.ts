import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-secondary-info',
  templateUrl: './secondary-info.component.html',
  styleUrls: ['./secondary-info.component.scss']
})
export class SecondaryInfoComponent implements OnInit {

  secondaryForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.secondaryForm = this.fb.group({
      pan: ['', Validators.required],
      aadhaar: ['', Validators.required],
      father: ['', Validators.required],
      mother: ['', Validators.required],
      spouse: ['', Validators.required],
      passport: ['', Validators.required],
      maritalStatus: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}