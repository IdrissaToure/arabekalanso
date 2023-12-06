import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha17Page } from './alpha17.page';

describe('Alpha17Page', () => {
  let component: Alpha17Page;
  let fixture: ComponentFixture<Alpha17Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha17Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
