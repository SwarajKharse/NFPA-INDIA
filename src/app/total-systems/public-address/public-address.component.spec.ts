import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicAddressComponent } from './public-address.component';

describe('PublicAddressComponent', () => {
  let component: PublicAddressComponent;
  let fixture: ComponentFixture<PublicAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicAddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
