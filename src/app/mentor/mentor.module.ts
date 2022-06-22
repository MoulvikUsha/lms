import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { MentorComponent } from './mentor.component';
import { ShareModule } from '../share/share/share.module';
import { RatingComponent } from './rating/rating.component';


@NgModule({
  declarations: [
    MentorComponent,
    RatingComponent,
  ],
  imports: [
    CommonModule,
    MentorRoutingModule,
    ShareModule
  ]
})
export class MentorModule { }
