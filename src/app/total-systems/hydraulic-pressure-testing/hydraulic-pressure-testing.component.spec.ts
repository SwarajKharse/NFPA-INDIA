import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydraulicPressureTestingComponent } from './hydraulic-pressure-testing.component';

describe('HydraulicPressureTestingComponent', () => {
  let component: HydraulicPressureTestingComponent;
  let fixture: ComponentFixture<HydraulicPressureTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HydraulicPressureTestingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HydraulicPressureTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
