import { TestBed } from '@angular/core/testing';

import { RoomService } from './room.service';

describe('Service: Room', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoomService = TestBed.get(RoomService);
    expect(service).toBeTruthy();
  });
});


