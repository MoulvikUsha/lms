import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { ShareModule } from '../share/share/share.module';


@NgModule({
  declarations: [
    EmployeeComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ShareModule
  ]
})
export class EmployeeModule { }
