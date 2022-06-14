import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApproveComponent } from './employee-details/approve/approve.component';
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
      {
        path: 'approve',
        component: ApproveComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
