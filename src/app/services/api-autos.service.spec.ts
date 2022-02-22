import { TestBed } from '@angular/core/testing';

import { ApiAutosService } from './api-autos.service';

describe('ApiAutosService', () => {
  let service: ApiAutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiAutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
