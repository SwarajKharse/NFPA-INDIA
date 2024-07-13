import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireAuditComponent } from './fire-audit.component';

describe('FireAuditComponent', () => {
  let component: FireAuditComponent;
  let fixture: ComponentFixture<FireAuditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FireAuditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FireAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
