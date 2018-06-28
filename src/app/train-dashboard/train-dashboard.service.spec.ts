import { TestBed, inject } from '@angular/core/testing';

import { TrainDashboardService } from './train-dashboard.service';

describe('TrainDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainDashboardService]
    });
  });

  it('should be created', inject([TrainDashboardService], (service: TrainDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
