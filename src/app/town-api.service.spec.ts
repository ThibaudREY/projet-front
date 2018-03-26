import { TestBed, inject } from '@angular/core/testing';

import { TownApiService } from './town-api.service';

describe('TownApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TownApiService]
    });
  });

  it('should be created', inject([TownApiService], (service: TownApiService) => {
    expect(service).toBeTruthy();
  }));
});
