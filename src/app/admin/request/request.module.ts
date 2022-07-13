import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './request.component';
import { ShareModule } from 'src/app/share/share/share.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RequestComponent
  ],
  imports: [
    CommonModule,
    RequestRoutingModule,
    ShareModule,
    FormsModule
  ]
})
export class RequestModule { }
