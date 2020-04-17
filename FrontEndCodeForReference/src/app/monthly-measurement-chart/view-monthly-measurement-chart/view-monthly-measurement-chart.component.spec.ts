import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMonthlyMeasurementChartComponent } from './view-monthly-measurement-chart.component';

describe('ViewMonthlyMeasurementChartComponent', () => {
  let component: ViewMonthlyMeasurementChartComponent;
  let fixture: ComponentFixture<ViewMonthlyMeasurementChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMonthlyMeasurementChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMonthlyMeasurementChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
