import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha10Page } from './alpha10.page';

describe('Alpha10Page', () => {
  let component: Alpha10Page;
  let fixture: ComponentFixture<Alpha10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
