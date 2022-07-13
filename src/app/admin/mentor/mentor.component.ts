import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MentorDialogComponent } from '../mentor-dialog/mentor-dialog.component';

@Component({
  selector: 'app-mentor',
  templateUrl: './mentor.component.html',
  styleUrls: ['./mentor.component.scss']
})
export class MentorComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(MentorDialogComponent);

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
