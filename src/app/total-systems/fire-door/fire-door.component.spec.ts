import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireDoorComponent } from './fire-door.component';

describe('FireDoorComponent', () => {
  let component: FireDoorComponent;
  let fixture: ComponentFixture<FireDoorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FireDoorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FireDoorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
