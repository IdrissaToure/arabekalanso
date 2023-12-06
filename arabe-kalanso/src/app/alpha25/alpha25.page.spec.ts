import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha25Page } from './alpha25.page';

describe('Alpha25Page', () => {
  let component: Alpha25Page;
  let fixture: ComponentFixture<Alpha25Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha25Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
