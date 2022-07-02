import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MockRatingComponent } from './mock-rating.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mock-rating',
    pathMatch: 'full'
  },
  {
    path:'', 
    component: MockRatingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MockRatingRoutingModule { }
