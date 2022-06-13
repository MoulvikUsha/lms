import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechSkillsComponent } from './tech-skills.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'skills',
    pathMatch: 'full'
  },
  {
    path:'', 
    component: TechSkillsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechSkillsRoutingModule { }
