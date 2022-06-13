import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressDetailsComponent } from './address-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'address',
    pathMatch: 'full'
  },
  {
    path:'', 
    component: AddressDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressDetailsRoutingModule { }
