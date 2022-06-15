import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpListRoutingModule } from './emp-list-routing.module';
import { EmpListComponent } from './emp-list.component';
import { ShareModule } from 'src/app/share/share/share.module';


@NgModule({
  declarations: [
    EmpListComponent
  ],
  imports: [
    CommonModule,
    EmpListRoutingModule,
    ShareModule
  ]
})
export class EmpListModule { }
