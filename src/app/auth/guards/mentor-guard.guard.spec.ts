import { TestBed } from '@angular/core/testing';

import { MentorGuardGuard } from './mentor-guard.guard';

describe('MentorGuardGuard', () => {
  let guard: MentorGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MentorGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
