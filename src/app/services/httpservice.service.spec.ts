import { TestBed, inject } from '@angular/core/testing';

import { HTTPServiceService } from './httpservice.service';

describe('HTTPServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HTTPServiceService]
    });
  });

  it('should be created', inject([HTTPServiceService], (service: HTTPServiceService) => {
    expect(service).toBeTruthy();
  }));
});
