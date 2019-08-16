import { TestBed } from '@angular/core/testing';

import { XotbThemeService } from './xotb-theme.service';

describe('XotbThemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XotbThemeService = TestBed.get(XotbThemeService);
    expect(service).toBeTruthy();
  });
});
