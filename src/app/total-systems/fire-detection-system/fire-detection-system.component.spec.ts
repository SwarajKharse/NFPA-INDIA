import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireDetectionSystemComponent } from './fire-detection-system.component';

describe('FireDetectionSystemComponent', () => {
  let component: FireDetectionSystemComponent;
  let fixture: ComponentFixture<FireDetectionSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FireDetectionSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FireDetectionSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
