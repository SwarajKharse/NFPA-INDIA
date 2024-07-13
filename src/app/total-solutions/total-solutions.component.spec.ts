import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSolutionsComponent } from './total-solutions.component';

describe('TotalSolutionsComponent', () => {
  let component: TotalSolutionsComponent;
  let fixture: ComponentFixture<TotalSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
