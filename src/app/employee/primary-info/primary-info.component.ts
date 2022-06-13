import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-primary-info',
  templateUrl: './primary-info.component.html',
  styleUrls: ['./primary-info.component.scss']
})
export class PrimaryInfoComponent implements OnInit {

  primaryForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.primaryForm = this.fb.group({
      empId: ['', Validators.required],
      empName: ['', Validators.required],
      joining: ['', Validators.required],
      birth: ['', Validators.required],
      email: ['', Validators.required],
      blood: ['', Validators.required],
      designation: ['', Validators.required],
      gender: ['', Validators.required],
      nationality: ['', Validators.required],
      status: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
