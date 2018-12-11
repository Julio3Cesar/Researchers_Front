import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyResearchesComponent } from './my-researches.component';

describe('MyResearchesComponent', () => {
  let component: MyResearchesComponent;
  let fixture: ComponentFixture<MyResearchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyResearchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyResearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
