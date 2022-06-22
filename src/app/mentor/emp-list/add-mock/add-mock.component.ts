import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-mock',
  templateUrl: './add-mock.component.html',
  styleUrls: ['./add-mock.component.scss']
})
export class AddMockComponent implements OnInit {

  createBatch: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createBatch = this.fb.group({
      batchName: [''],
      mentorName: [''],
      technology: [''],
      startBatch: [''],
      endBatch: [''],
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }
}
