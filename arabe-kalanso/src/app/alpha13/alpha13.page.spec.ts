import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha13Page } from './alpha13.page';

describe('Alpha13Page', () => {
  let component: Alpha13Page;
  let fixture: ComponentFixture<Alpha13Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
