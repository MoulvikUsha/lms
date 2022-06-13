import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankDetailsComponent } from './bank-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bank',
    pathMatch: 'full'
  },
  {
    path:'', 
    component: BankDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankDetailsRoutingModule { }
