import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimaryInfoComponent } from './primary-info.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'primary',
    pathMatch: 'full'
  },
  {
    path:'', 
    component: PrimaryInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimaryInfoRoutingModule { }
