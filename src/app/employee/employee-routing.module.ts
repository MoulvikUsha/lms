import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'employee-details',
    pathMatch: 'full'
  },
  {
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: 'employee-details',
        loadChildren: () => import('./employee-details/employee-details.module').then(m => m.EmployeeDetailsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
