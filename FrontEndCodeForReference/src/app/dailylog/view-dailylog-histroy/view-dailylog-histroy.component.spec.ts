import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDailylogHistroyComponent } from './view-dailylog-histroy.component';

describe('ViewDailylogHistroyComponent', () => {
  let component: ViewDailylogHistroyComponent;
  let fixture: ComponentFixture<ViewDailylogHistroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDailylogHistroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDailylogHistroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
