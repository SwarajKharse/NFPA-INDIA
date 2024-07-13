import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireExtinguisherRefillingComponent } from './fire-extinguisher-refilling.component';

describe('FireExtinguisherRefillingComponent', () => {
  let component: FireExtinguisherRefillingComponent;
  let fixture: ComponentFixture<FireExtinguisherRefillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FireExtinguisherRefillingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FireExtinguisherRefillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
