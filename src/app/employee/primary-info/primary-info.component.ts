import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-primary-info',
  templateUrl: './primary-info.component.html',
  styleUrls: ['./primary-info.component.scss']
})
export class PrimaryInfoComponent implements OnInit {

  primaryForm !: FormGroup;

  constructor(private fb: FormBuilder) {
    this.primaryForm = this.fb.group({

    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
