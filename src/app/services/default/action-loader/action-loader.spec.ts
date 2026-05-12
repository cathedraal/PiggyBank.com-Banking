import { TestBed } from '@angular/core/testing';

import { ActionLoaderService } from './action-loader';

describe('ActionLoader', () => {
  let service: ActionLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
