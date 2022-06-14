import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchDialogRoutingModule } from './batch-dialog-routing.module';
import { ShareModule } from 'src/app/share/share/share.module';
import { BatchDialogComponent } from './batch-dialog.component';


@NgModule({
  declarations: [
    BatchDialogComponent
  ],
  imports: [
    CommonModule,
    BatchDialogRoutingModule,
    ShareModule
  ]
})
export class BatchDialogModule { }
