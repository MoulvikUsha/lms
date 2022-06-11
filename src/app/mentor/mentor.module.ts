import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { MentorComponent } from './mentor.component';


@NgModule({
  declarations: [
    MentorComponent
  ],
  imports: [
    CommonModule,
    MentorRoutingModule
  ]
})
export class MentorModule { }
