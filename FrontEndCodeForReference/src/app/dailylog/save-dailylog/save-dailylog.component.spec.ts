import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveDailylogComponent } from './save-dailylog.component';

describe('SaveDailylogComponent', () => {
  let component: SaveDailylogComponent;
  let fixture: ComponentFixture<SaveDailylogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveDailylogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveDailylogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
