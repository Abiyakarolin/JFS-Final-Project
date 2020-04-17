import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyMeasurementChartUserListComponent } from './monthly-measurement-chart-user-list.component';

describe('MonthlyMeasurementChartUserListComponent', () => {
  let component: MonthlyMeasurementChartUserListComponent;
  let fixture: ComponentFixture<MonthlyMeasurementChartUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyMeasurementChartUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyMeasurementChartUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
