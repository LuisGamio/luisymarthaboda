import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistanceSectionComponent } from './assistance-section.component';

describe('AssistanceSectionComponent', () => {
  let component: AssistanceSectionComponent;
  let fixture: ComponentFixture<AssistanceSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssistanceSectionComponent]
    });
    fixture = TestBed.createComponent(AssistanceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
