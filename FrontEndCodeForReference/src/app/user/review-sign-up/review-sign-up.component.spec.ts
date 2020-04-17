import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSignUpComponent } from './review-sign-up.component';

describe('ReviewSignUpComponent', () => {
  let component: ReviewSignUpComponent;
  let fixture: ComponentFixture<ReviewSignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewSignUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
