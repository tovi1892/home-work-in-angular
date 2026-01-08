import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleApartments } from './sale-apartments';

describe('SaleApartments', () => {
  let component: SaleApartments;
  let fixture: ComponentFixture<SaleApartments>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleApartments]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleApartments);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
