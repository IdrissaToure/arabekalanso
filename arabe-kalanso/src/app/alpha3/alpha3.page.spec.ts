import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha3Page } from './alpha3.page';

describe('Alpha3Page', () => {
  let component: Alpha3Page;
  let fixture: ComponentFixture<Alpha3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
