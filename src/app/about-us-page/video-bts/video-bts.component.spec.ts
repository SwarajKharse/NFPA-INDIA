import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoBtsComponent } from './video-bts.component';

describe('VideoBtsComponent', () => {
  let component: VideoBtsComponent;
  let fixture: ComponentFixture<VideoBtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoBtsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoBtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
