import { TestBed } from '@angular/core/testing';

import { EmployeeGuardGuard } from './employee-guard.guard';

describe('EmployeeGuardGuard', () => {
  let guard: EmployeeGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployeeGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
