import { TestBed } from '@angular/core/testing';

import { NzTableService } from './nz-table.service';

describe('NzTableService', () => {
  let service: NzTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NzTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
