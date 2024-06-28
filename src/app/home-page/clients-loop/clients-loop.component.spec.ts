import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsLoopComponent } from './clients-loop.component';

describe('ClientsLoopComponent', () => {
  let component: ClientsLoopComponent;
  let fixture: ComponentFixture<ClientsLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsLoopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientsLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
