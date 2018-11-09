import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchesShowComponent } from './researches-show.component';

describe('ResearchesShowComponent', () => {
  let component: ResearchesShowComponent;
  let fixture: ComponentFixture<ResearchesShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchesShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
