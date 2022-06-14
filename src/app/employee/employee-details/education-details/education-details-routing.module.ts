import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationDetailsComponent } from './education-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'education',
    pathMatch: 'full'
  },
  {
    path:'', 
    component: EducationDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationDetailsRoutingModule { }
