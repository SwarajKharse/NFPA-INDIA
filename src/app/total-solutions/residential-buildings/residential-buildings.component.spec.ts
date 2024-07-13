import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialBuildingsComponent } from './residential-buildings.component';

describe('ResidentialBuildingsComponent', () => {
  let component: ResidentialBuildingsComponent;
  let fixture: ComponentFixture<ResidentialBuildingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResidentialBuildingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentialBuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
