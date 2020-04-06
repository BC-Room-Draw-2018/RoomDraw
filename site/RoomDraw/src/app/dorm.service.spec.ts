/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DormService } from './dorm.service';

describe('Service: Dorm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DormService]
    });
  });

  it('should ...', inject([DormService], (service: DormService) => {
    expect(service).toBeTruthy();
  }));
});
