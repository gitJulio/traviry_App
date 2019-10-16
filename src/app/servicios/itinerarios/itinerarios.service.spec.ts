import { TestBed } from '@angular/core/testing';

import { ItinerariosService } from './itinerarios.service';

describe('ItinerariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItinerariosService = TestBed.get(ItinerariosService);
    expect(service).toBeTruthy();
  });
});
