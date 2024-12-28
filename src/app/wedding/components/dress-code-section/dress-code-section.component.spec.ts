import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressCodeSectionComponent } from './dress-code-section.component';

describe('DressCodeSectionComponent', () => {
  let component: DressCodeSectionComponent;
  let fixture: ComponentFixture<DressCodeSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DressCodeSectionComponent]
    });
    fixture = TestBed.createComponent(DressCodeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
