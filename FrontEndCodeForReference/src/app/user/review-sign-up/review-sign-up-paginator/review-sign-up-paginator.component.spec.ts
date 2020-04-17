import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSignUpPaginatorComponent } from './review-sign-up-paginator.component';

describe('ReviewSignUpPaginatorComponent', () => {
  let component: ReviewSignUpPaginatorComponent;
  let fixture: ComponentFixture<ReviewSignUpPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewSignUpPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewSignUpPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
