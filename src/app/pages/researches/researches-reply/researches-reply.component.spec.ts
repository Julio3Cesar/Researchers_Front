import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchesReplyComponent } from './researches-reply.component';

describe('ResearchesReplyComponent', () => {
  let component: ResearchesReplyComponent;
  let fixture: ComponentFixture<ResearchesReplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchesReplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchesReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
