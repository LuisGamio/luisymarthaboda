import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsSectionComponent } from './parents-section.component';

describe('ParentsSectionComponent', () => {
  let component: ParentsSectionComponent;
  let fixture: ComponentFixture<ParentsSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParentsSectionComponent]
    });
    fixture = TestBed.createComponent(ParentsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
