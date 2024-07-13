import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireHydrantSystemComponent } from './fire-hydrant-system.component';

describe('FireHydrantSystemComponent', () => {
  let component: FireHydrantSystemComponent;
  let fixture: ComponentFixture<FireHydrantSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FireHydrantSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FireHydrantSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
