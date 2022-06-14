import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { MentorComponent } from './mentor.component';
import { ShareModule } from '../share/share/share.module';


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
