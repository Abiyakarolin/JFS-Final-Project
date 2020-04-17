import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveMonthlyMeasurementChartComponent } from './save-monthly-measurement-chart.component';

describe('SaveMonthlyMeasurementChartComponent', () => {
  let component: SaveMonthlyMeasurementChartComponent;
  let fixture: ComponentFixture<SaveMonthlyMeasurementChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveMonthlyMeasurementChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveMonthlyMeasurementChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
