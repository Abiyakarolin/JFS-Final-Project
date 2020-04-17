import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadWeeklyPlanComponent } from './upload-weekly-plan.component';

describe('UploadWeeklyPlanComponent', () => {
  let component: UploadWeeklyPlanComponent;
  let fixture: ComponentFixture<UploadWeeklyPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadWeeklyPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadWeeklyPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
