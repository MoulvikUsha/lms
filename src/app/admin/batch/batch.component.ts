import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BatchDialogComponent } from '../batch-dialog/batch-dialog.component';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.scss']
})
export class BatchComponent implements OnInit {

  @Input() name = 'Batch';

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(BatchDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

  emp: any[] = [
    { id: 1, name: 'John' }
  ]

  checked: boolean = false;

  selectAll() {
    var value = this.checked ? false : true;
    this.emp.forEach(element => {
      element.checked = value;
    });
  }
}
