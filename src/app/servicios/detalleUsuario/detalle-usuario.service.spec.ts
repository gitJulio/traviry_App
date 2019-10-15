import { TestBed } from '@angular/core/testing';

import { DetalleUsuarioService } from './detalle-usuario.service';

describe('DetalleUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetalleUsuarioService = TestBed.get(DetalleUsuarioService);
    expect(service).toBeTruthy();
  });
});
