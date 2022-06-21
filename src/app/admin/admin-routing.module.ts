import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ApproveComponent } from './approve/approve.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'batch',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'batch',
        loadChildren: () => import('./batch/batch.module').then(m => m.BatchModule)
      },
      {
        path: 'mentor',
        loadChildren: () => import('./mentor/mentor.module').then(m => m.MentorModule)
      },
      {
        path: 'request',
        loadChildren: () => import('./request/request.module').then(m => m.RequestModule)
      },
      {
        path: 'approve',
        component: ApproveComponent
      },
      {
        path: 'status',
        component: StatusComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
