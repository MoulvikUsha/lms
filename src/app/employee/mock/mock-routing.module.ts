import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MockComponent } from './mock.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mock-rating',
    pathMatch: 'full'
  },
  {
    path:'', 
    component: MockComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MockRoutingModule { }
