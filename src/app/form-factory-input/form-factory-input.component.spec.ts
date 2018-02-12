import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFactoryInputComponent } from './form-factory-input.component';

describe('FormFactoryInputComponent', () => {
  let component: FormFactoryInputComponent;
  let fixture: ComponentFixture<FormFactoryInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFactoryInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFactoryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
