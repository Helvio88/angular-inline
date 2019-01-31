import { TestBed } from '@angular/core/testing';

import { InlineEditService } from './inline-edit.service';

describe('InlineEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InlineEditService = TestBed.get(InlineEditService);
    expect(service).toBeTruthy();
  });
});
