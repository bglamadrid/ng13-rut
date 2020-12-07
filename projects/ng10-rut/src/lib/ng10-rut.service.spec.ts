import { TestBed } from '@angular/core/testing';

import { Ng10RutService } from './ng10-rut.service';

describe('Ng9RutService', () => {
  let service: Ng10RutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ng10RutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
