import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireSignComponent } from './fire-sign.component';

describe('FireSignComponent', () => {
  let component: FireSignComponent;
  let fixture: ComponentFixture<FireSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FireSignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FireSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
