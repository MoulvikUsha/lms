import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent implements OnInit {

  bankForm: FormGroup;

  constructor(private fb: FormBuilder) { 
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
    
  }
}
