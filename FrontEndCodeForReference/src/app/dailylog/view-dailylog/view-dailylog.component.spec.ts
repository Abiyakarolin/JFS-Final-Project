import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDailylogComponent } from './view-dailylog.component';

describe('ViewDailylogComponent', () => {
  let component: ViewDailylogComponent;
  let fixture: ComponentFixture<ViewDailylogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDailylogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDailylogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
