import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItinerarioPage } from './view-itinerario.page';

describe('ViewItinerarioPage', () => {
  let component: ViewItinerarioPage;
  let fixture: ComponentFixture<ViewItinerarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewItinerarioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItinerarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
