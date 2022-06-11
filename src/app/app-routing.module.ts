import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/admin/batch',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    data: {
      role: ['Admin']
    },
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'employee',
    data: {
      role: ['Employee']
    },
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'mentor',
    data: {
      role: ['Mentor']
    },
    loadChildren: () => import('./mentor/mentor.module').then(m => m.MentorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
