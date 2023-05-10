import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdateValidationComponent } from './getdate-validation.component';

describe('GetdateValidationComponent', () => {
  let component: GetdateValidationComponent;
  let fixture: ComponentFixture<GetdateValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetdateValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetdateValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
