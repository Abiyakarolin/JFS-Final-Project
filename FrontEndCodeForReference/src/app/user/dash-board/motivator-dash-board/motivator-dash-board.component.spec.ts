import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivatorDashBoardComponent } from './motivator-dash-board.component';

describe('MotivatorDashBoardComponent', () => {
  let component: MotivatorDashBoardComponent;
  let fixture: ComponentFixture<MotivatorDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotivatorDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivatorDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
