import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondaryInfoComponent } from './secondary-info.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'secondary',
    pathMatch: 'full'
  },
  {
    path:'', 
    component: SecondaryInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondaryInfoRoutingModule { }
