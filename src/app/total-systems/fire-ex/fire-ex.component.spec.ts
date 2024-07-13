import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireExComponent } from './fire-ex.component';

describe('FireExComponent', () => {
  let component: FireExComponent;
  let fixture: ComponentFixture<FireExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FireExComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FireExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
