import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengerDashBoardComponent } from './challenger-dash-board.component';

describe('ChallengerDashBoardComponent', () => {
  let component: ChallengerDashBoardComponent;
  let fixture: ComponentFixture<ChallengerDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengerDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengerDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
