import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstLogoTransitionComponent } from './first-logo-transition.component';

describe('FirstLogoTransitionComponent', () => {
  let component: FirstLogoTransitionComponent;
  let fixture: ComponentFixture<FirstLogoTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstLogoTransitionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstLogoTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
