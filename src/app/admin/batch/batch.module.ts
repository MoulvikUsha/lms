import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchRoutingModule } from './batch-routing.module';
import { BatchComponent } from './batch.component';
import { BatchDialogComponent } from '../batch-dialog/batch-dialog.component';
import { ShareModule } from 'src/app/share/share/share.module';


@NgModule({
  declarations: [
    BatchComponent,
    BatchDialogComponent
  ],
  imports: [
    CommonModule,
    BatchRoutingModule,
    ShareModule
  ]
})
export class BatchModule { }
