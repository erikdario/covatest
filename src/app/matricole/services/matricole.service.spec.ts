import { TestBed, inject } from '@angular/core/testing';

import { MatricoleService } from './matricole.service';

describe('MatricoleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatricoleService]
    });
  });

  it('should be created', inject([MatricoleService], (service: MatricoleService) => {
    expect(service).toBeTruthy();
  }));
});
