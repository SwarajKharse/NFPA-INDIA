import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesRedirectComponent } from './services-redirect.component';

describe('ServicesRedirectComponent', () => {
  let component: ServicesRedirectComponent;
  let fixture: ComponentFixture<ServicesRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesRedirectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
