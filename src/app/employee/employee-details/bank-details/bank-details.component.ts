import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeDetailsComponent } from '../employee-details.component';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent implements OnInit {

  bankForm: FormGroup;

  constructor(private fb: FormBuilder, public empDetails: EmployeeDetailsComponent) { 
    this.bankForm = this.fb.group({
      account: ['', Validators.required],
      bankName: ['', Validators.required],
      accountType: ['', Validators.required],
      ifsc: ['', Validators.required],
      branch: ['', Validators.required],
      state: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.bankForm.valid) {
      this.empDetails.filled4 = true
    }
  }
}
