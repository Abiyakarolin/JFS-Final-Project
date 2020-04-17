import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadWeeklyPlanComponent } from './download-weekly-plan.component';

describe('DownloadWeeklyPlanComponent', () => {
  let component: DownloadWeeklyPlanComponent;
  let fixture: ComponentFixture<DownloadWeeklyPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadWeeklyPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadWeeklyPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
