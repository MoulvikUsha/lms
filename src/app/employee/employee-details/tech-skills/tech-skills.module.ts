import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechSkillsRoutingModule } from './tech-skills-routing.module';
import { TechSkillsComponent } from './tech-skills.component';
import { ShareModule } from 'src/app/share/share/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TechSkillsComponent
  ],
  imports: [
    CommonModule,
    TechSkillsRoutingModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TechSkillsModule { }
