import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecondaryInfoRoutingModule } from './secondary-info-routing.module';
import { SecondaryInfoComponent } from './secondary-info.component';
import { ShareModule } from 'src/app/share/share/share.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SecondaryInfoComponent
  ],
  imports: [
    CommonModule,
    SecondaryInfoRoutingModule,
    ShareModule,
    ReactiveFormsModule
  ]
})
export class SecondaryInfoModule { }
