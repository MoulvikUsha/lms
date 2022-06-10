import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'primary',
    pathMatch: 'full'
  },
  {
    path: '',
    component: EmployeeComponent,
    children: [
      {
        path: 'primary',
        loadChildren: () => import('./primary-info/primary-info.module').then(m => m.PrimaryInfoModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
