import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressDetailsRoutingModule } from './address-details-routing.module';
import { AddressDetailsComponent } from './address-details.component';
import { ShareModule } from 'src/app/share/share/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddressDetailsComponent
  ],
  imports: [
    CommonModule,
    AddressDetailsRoutingModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddressDetailsModule { }
