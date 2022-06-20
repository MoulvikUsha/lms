import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-batch-dialog',
  templateUrl: './batch-dialog.component.html',
  styleUrls: ['./batch-dialog.component.scss']
})
export class BatchDialogComponent implements OnInit {

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
