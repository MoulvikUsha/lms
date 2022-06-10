import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorComponent } from './mentor.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mentor',
    pathMatch: 'full'
  },
  {
    path:'', 
    component: MentorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorRoutingModule { }
