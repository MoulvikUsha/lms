import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpListComponent } from './emp-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'emp-list',
    pathMatch: 'full'
  },
  {
    path:'', 
    component: EmpListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpListRoutingModule { }
