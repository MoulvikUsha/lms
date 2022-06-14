import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimaryInfoRoutingModule } from './primary-info-routing.module';
import { PrimaryInfoComponent } from './primary-info.component';
import { ShareModule } from 'src/app/share/share/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PrimaryInfoComponent
  ],
  imports: [
    CommonModule,
    PrimaryInfoRoutingModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PrimaryInfoModule { }
