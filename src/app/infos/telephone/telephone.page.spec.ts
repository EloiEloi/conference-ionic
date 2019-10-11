import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephonePage } from './telephone.page';

describe('TelephonePage', () => {
  let component: TelephonePage;
  let fixture: ComponentFixture<TelephonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelephonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
