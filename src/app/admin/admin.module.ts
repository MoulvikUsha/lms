import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ShareModule } from '../share/share/share.module';
import { ApproveComponent } from './approve/approve.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    AdminComponent,
    ApproveComponent,
    StatusComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ShareModule
  ]
})
export class AdminModule { }
