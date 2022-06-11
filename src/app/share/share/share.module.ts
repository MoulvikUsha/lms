import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTabsModule,
    MatFormFieldModule,
  ],
  exports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule,
    MatTabsModule,
    MatFormFieldModule,
  ]
})
export class ShareModule { }
