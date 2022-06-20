import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { ShareModule } from 'src/app/share/share/share.module';
import { MentorComponent } from './mentor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MentorDialogComponent } from '../mentor-dialog/mentor-dialog.component';


@NgModule({
  declarations: [
    MentorComponent,
    MentorDialogComponent
  ],
  imports: [
    CommonModule,
    MentorRoutingModule,
    ShareModule,
     FormsModule,
     ReactiveFormsModule
  ]
})
export class MentorModule { }
