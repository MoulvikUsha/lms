import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryInfoComponent } from './primary-info.component';

describe('PrimaryInfoComponent', () => {
  let component: PrimaryInfoComponent;
  let fixture: ComponentFixture<PrimaryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
