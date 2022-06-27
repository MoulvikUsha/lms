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

  masterSelected:boolean = false;
  checklist:any;
  checkedList:any;

  constructor(public dialog: MatDialog, private mentor: MentorComponent) { 
   
  }

  ngOnInit(): void {
    this.mentor.present = true;
  }

  openDialog() {
    const dialogRef = this.dialog.open(BatchDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // checkUncheckAll() {
  //   for (var i = 0; i < this.checklist.length; i++) {
  //     this.checklist[i].isSelected = this.masterSelected;
  //   }
  //   this.getCheckedItemList();
  // }

  // item:any 
  //   isAllSelected() {
  //   this.masterSelected = this.checklist.every(function(item:any) {
  //       return item.isSelected == true;
  //     })
  //   this.getCheckedItemList();
  // }

  // getCheckedItemList(){
  //   this.checkedList = [];
  //   for (var i = 0; i < this.checklist.length; i++) {
  //     if(this.checklist[i].isSelected)
  //     this.checkedList.push(this.checklist[i]);
  //   }
  //   this.checkedList = JSON.stringify(this.checkedList);
  // }
  
  rating() {

  }

}
