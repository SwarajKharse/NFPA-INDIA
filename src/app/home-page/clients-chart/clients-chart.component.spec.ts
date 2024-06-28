import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsChartComponent } from './clients-chart.component';

describe('ClientsChartComponent', () => {
  let component: ClientsChartComponent;
  let fixture: ComponentFixture<ClientsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
