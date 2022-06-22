import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddMockComponent } from './add-mock/add-mock.component';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {

  ratingForm : FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
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


  openDialog() {
    const dialogRef = this.dialog.open(AddMockComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
  }

  onSubmit() {

  }
}
