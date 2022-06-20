import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchRoutingModule } from './batch-routing.module';
import { BatchComponent } from './batch.component';
import { ShareModule } from 'src/app/share/share/share.module';
import { BatchDialogComponent } from '../batch-dialog/batch-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BatchComponent,
    BatchDialogComponent
  ],
  imports: [
    CommonModule,
    BatchRoutingModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BatchModule { }
