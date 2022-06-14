import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankDetailsRoutingModule } from './bank-details-routing.module';
import { BankDetailsComponent } from './bank-details.component';
import { ShareModule } from 'src/app/share/share/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BankDetailsComponent
  ],
  imports: [
    CommonModule,
    BankDetailsRoutingModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BankDetailsModule { }
