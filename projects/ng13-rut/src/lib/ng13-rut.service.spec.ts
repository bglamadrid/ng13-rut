import { TestBed } from '@angular/core/testing';

import { Ng13RutService } from './ng13-rut.service';

describe('Ng13RutService', () => {
  let service: Ng13RutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ng13RutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
