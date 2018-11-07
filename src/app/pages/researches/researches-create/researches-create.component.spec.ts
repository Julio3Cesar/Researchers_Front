import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchesCreateComponent } from './researches-create.component';

describe('ResearchesCreateComponent', () => {
  let component: ResearchesCreateComponent;
  let fixture: ComponentFixture<ResearchesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
