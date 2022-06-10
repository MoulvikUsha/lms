import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { ShareModule } from 'src/app/share/share/share.module';
import { MentorComponent } from './mentor.component';


@NgModule({
  declarations: [
    MentorComponent
  ],
  imports: [
    CommonModule,
    MentorRoutingModule,
    ShareModule
  ]
})
export class MentorModule { }