/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GaugeCComponent } from './gauge-c.component';

describe('GaugeCComponent', () => {
  let component: GaugeCComponent;
  let fixture: ComponentFixture<GaugeCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaugeCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
