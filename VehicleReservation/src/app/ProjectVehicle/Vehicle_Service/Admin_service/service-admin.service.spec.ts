import { TestBed } from '@angular/core/testing';

import { ServiceAdminService } from './service-admin.service';

describe('ServiceAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceAdminService = TestBed.get(ServiceAdminService);
    expect(service).toBeTruthy();
  });
});
