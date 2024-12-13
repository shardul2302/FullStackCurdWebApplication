import { TestBed } from '@angular/core/testing';

import { ShardulService } from './shardul.service';

describe('ShardulService', () => {
  let service: ShardulService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShardulService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
