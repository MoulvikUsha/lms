import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BatchDialogComponent } from '../batch-dialog/batch-dialog.component';
import { MentorComponent } from '../mentor.component';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent implements OnInit {

  constructor(public dialog: MatDialog, private mentor: MentorComponent) { }

  ngOnInit(): void {
    this.mentor.present = true;
  }

  openDialog() {
    const dialogRef = this.dialog.open(BatchDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  rating() {

  }
}
