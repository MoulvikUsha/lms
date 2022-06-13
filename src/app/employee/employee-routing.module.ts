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
      {
        path: 'secondary',
        loadChildren: () => import('./secondary-info/secondary-info.module').then(m => m.SecondaryInfoModule)
      },
      {
        path: 'education',
        loadChildren: () => import('./education-details/education-details.module').then(m => m.EducationDetailsModule)
      },
      {
        path: 'address',
        loadChildren: () => import('./address-details/address-details.module').then(m => m.AddressDetailsModule)
      },
      {
        path: 'bank',
        loadChildren: () => import('./bank-details/bank-details.module').then(m => m.BankDetailsModule)
      },
      {
        path: 'skills',
        loadChildren: () => import('./tech-skills/tech-skills.module').then(m => m.TechSkillsModule)
      },
      {
        path: 'experience',
        loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'mock-rating',
        loadChildren: () => import('./mock/mock.module').then(m => m.MockModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
