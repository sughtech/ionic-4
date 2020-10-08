import { TestBed } from '@angular/core/testing';

import { HandleNYTService } from './handle-nyt.service';

describe('HandleNYTService', () => {
  let service: HandleNYTService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleNYTService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
