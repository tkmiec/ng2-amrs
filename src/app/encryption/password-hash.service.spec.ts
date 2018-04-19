import { TestBed, inject } from '@angular/core/testing';

import { PasswordHashService } from './password-hash.service';

describe('PasswordHashService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PasswordHashService]
    });
  });

  it('should be created', inject([PasswordHashService], (service: PasswordHashService) => {
    expect(service).toBeTruthy();
  }));
});
