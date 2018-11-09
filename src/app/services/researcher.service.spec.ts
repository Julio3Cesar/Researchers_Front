import { TestBed, inject } from '@angular/core/testing';

import { ResearcherService } from './researcher.service';

describe('ResearcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResearcherService]
    });
  });

  it('should be created', inject([ResearcherService], (service: ResearcherService) => {
    expect(service).toBeTruthy();
  }));
});
