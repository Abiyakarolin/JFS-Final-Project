import { TestBed } from '@angular/core/testing';

import { MonthlyMeasurementChartService } from './monthly-measurement-chart.service';

describe('MonthlyMeasurementChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonthlyMeasurementChartService = TestBed.get(MonthlyMeasurementChartService);
    expect(service).toBeTruthy();
  });
});
