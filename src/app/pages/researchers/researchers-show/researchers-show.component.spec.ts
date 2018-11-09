import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchersShowComponent } from './researchers-show.component';

describe('ResearchersShowComponent', () => {
  let component: ResearchersShowComponent;
  let fixture: ComponentFixture<ResearchersShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchersShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchersShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
