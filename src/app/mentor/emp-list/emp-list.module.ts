import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpListRoutingModule } from './emp-list-routing.module';
import { EmpListComponent } from './emp-list.component';
import { ShareModule } from 'src/app/share/share/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EmpListComponent
  ],
  imports: [
    CommonModule,
    EmpListRoutingModule,
    ShareModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EmpListModule { }
