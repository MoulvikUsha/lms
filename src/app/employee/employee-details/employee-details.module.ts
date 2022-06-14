import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDetailsRoutingModule } from './employee-details-routing.module';
import { EmployeeDetailsComponent } from './employee-details.component';
import { ShareModule } from 'src/app/share/share/share.module';


@NgModule({
  declarations: [
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeeDetailsRoutingModule,
    ShareModule
  ]
})
export class EmployeeDetailsModule { }
