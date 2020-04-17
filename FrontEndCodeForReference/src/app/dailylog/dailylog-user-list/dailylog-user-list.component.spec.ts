import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailylogUserListComponent } from './dailylog-user-list.component';

describe('DailylogUserListComponent', () => {
  let component: DailylogUserListComponent;
  let fixture: ComponentFixture<DailylogUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailylogUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailylogUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
