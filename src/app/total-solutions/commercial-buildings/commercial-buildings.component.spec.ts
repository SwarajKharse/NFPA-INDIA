import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialBuildingsComponent } from './commercial-buildings.component';

describe('CommercialBuildingsComponent', () => {
  let component: CommercialBuildingsComponent;
  let fixture: ComponentFixture<CommercialBuildingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommercialBuildingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialBuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
