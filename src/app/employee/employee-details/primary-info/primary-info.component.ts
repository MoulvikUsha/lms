import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';
import { EmployeeDetailsComponent } from '../employee-details.component';

@Component({
  selector: 'app-primary-info',
  templateUrl: './primary-info.component.html',
  styleUrls: ['./primary-info.component.scss']
})
export class PrimaryInfoComponent implements OnInit {

  primaryForm : FormGroup;

  constructor(private fb: FormBuilder, public empDetails: EmployeeDetailsComponent) {
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
    if (this.primaryForm.valid) {
      this.empDetails.filled = true
    }
  }
}
