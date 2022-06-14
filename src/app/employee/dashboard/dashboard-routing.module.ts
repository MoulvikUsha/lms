import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mock',
    pathMatch: 'full'
  },
  {
    path:'', 
    component: DashboardComponent,
    children: [
      {
        path:'mock',
        loadChildren: () => import('./mock/mock.module').then(m => m.MockModule)
      },
      {
        path:'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
