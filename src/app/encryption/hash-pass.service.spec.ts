import { TestBed, inject, async } from '@angular/core/testing';

import { HashPassService } from './hash-pass.service';

describe('HashPassService', () => {
  let service;
  let testPass = 'password123';
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HashPassService]
    });
  });

  it('should be created', inject([HashPassService], (service: HashPassService) => {
    expect(service).toBeTruthy();
  }));

  it('should hash a password', inject( [HashPassService], () => {
    expect(testPass).not.toEqual(service.hashPassword(testPass), 'hashPassword()');
  }));
});
