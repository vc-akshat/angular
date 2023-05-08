import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetfeedbackFormComponent } from './getfeedback-form.component';

describe('GetfeedbackFormComponent', () => {
  let component: GetfeedbackFormComponent;
  let fixture: ComponentFixture<GetfeedbackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetfeedbackFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetfeedbackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
