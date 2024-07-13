import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectInteriorComponent } from './architect-interior.component';

describe('ArchitectInteriorComponent', () => {
  let component: ArchitectInteriorComponent;
  let fixture: ComponentFixture<ArchitectInteriorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectInteriorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchitectInteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
