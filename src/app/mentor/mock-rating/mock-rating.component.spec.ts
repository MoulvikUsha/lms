import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockRatingComponent } from './mock-rating.component';

describe('MockRatingComponent', () => {
  let component: MockRatingComponent;
  let fixture: ComponentFixture<MockRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
