import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

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
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
