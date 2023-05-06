import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutFieldComponent } from './checkout-field.component';

describe('CheckoutFieldComponent', () => {
  let component: CheckoutFieldComponent;
  let fixture: ComponentFixture<CheckoutFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
