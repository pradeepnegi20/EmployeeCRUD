import { TestBed } from '@angular/core/testing';

import { ERoleGuard } from './erole.guard';

describe('ERoleGuard', () => {
  let guard: ERoleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ERoleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
