import { TestBed } from '@angular/core/testing';

import { HandleFBService } from './handle-fb.service';

describe('HandleFBService', () => {
  let service: HandleFBService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleFBService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
