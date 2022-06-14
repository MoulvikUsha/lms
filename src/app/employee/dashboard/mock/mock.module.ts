import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MockRoutingModule } from './mock-routing.module';
import { MockComponent } from './mock.component';
import { ShareModule } from 'src/app/share/share/share.module';


@NgModule({
  declarations: [
    MockComponent
  ],
  imports: [
    CommonModule,
    MockRoutingModule,
    ShareModule,
  ]
})
export class MockModule { }
