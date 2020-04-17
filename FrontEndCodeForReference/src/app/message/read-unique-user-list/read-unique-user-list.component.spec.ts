import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadUniqueUserListComponent } from './read-unique-user-list.component';

describe('ReadUniqueUserListComponent', () => {
  let component: ReadUniqueUserListComponent;
  let fixture: ComponentFixture<ReadUniqueUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadUniqueUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadUniqueUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
