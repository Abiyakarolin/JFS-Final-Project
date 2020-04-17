import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMessageConversationComponent } from './read-message-conversation.component';

describe('ReadMessageConversationComponent', () => {
  let component: ReadMessageConversationComponent;
  let fixture: ComponentFixture<ReadMessageConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadMessageConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMessageConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
