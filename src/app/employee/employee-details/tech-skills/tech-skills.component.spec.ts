import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSkillsComponent } from './tech-skills.component';

describe('TechSkillsComponent', () => {
  let component: TechSkillsComponent;
  let fixture: ComponentFixture<TechSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
