import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryInfoComponent } from './secondary-info.component';

describe('SecondaryInfoComponent', () => {
  let component: SecondaryInfoComponent;
  let fixture: ComponentFixture<SecondaryInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
