import { TestBed } from '@angular/core/testing';

import { AnnualProjectService } from './annual-project.service';

describe('AnnualProjectService', () => {
  let service: AnnualProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnualProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
