import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorComponent } from './mentor.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MentorComponent,
    children: [
      {
        path:'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path:'batch',
        loadChildren: () => import('./batch/batch.module').then(m => m.BatchModule)
      },
      {
        path:'emp-list',
        loadChildren: () => import('./emp-list/emp-list.module').then(m => m.EmpListModule)
      },
      {
        path:'mock-rating',
        loadChildren: () => import('./mock-rating/mock-rating.module').then(m => m.MockRatingModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorRoutingModule { }
