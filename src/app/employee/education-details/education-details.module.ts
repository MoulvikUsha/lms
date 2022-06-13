import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationDetailsRoutingModule } from './education-details-routing.module';
import { EducationDetailsComponent } from './education-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from 'src/app/share/share/share.module';


@NgModule({
  declarations: [
    EducationDetailsComponent
  ],
  imports: [
    CommonModule,
    EducationDetailsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ShareModule
  ]
})
export class EducationDetailsModule { }
