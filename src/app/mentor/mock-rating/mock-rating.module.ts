import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MockRatingRoutingModule } from './mock-rating-routing.module';
import { ShareModule } from 'src/app/share/share/share.module';
import { MockRatingComponent } from './mock-rating.component';


@NgModule({
  declarations: [
    MockRatingComponent
  ],
  imports: [
    CommonModule,
    MockRatingRoutingModule,
    ShareModule
  ]
})
export class MockRatingModule { }
