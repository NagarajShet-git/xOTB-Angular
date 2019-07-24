import { TestBed } from '@angular/core/testing';

import { ModalAppService } from './modal-app.service';

describe('ModalAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalAppService = TestBed.get(ModalAppService);
    expect(service).toBeTruthy();
  });
});
