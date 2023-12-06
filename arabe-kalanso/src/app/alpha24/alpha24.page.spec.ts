import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha24Page } from './alpha24.page';

describe('Alpha24Page', () => {
  let component: Alpha24Page;
  let fixture: ComponentFixture<Alpha24Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha24Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
