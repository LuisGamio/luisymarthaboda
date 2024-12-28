import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftSectionComponent } from './gift-section.component';

describe('GiftSectionComponent', () => {
  let component: GiftSectionComponent;
  let fixture: ComponentFixture<GiftSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiftSectionComponent]
    });
    fixture = TestBed.createComponent(GiftSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
