import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule,
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule,
  ]
})
export class ShareModule { }
