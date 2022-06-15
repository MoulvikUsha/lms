import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {

  ratingForm : FormGroup;

  constructor(private fb: FormBuilder) {
    this.ratingForm = this.fb.group({
      mockType: ['', Validators.required],
      mockBy: ['', Validators.required],
      technolgy: ['', Validators.required],
      practical: ['', Validators.required],
      theory: ['', Validators.required],
      overall: ['', Validators.required],
      feedback: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
