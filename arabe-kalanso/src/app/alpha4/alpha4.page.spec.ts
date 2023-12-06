import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha4Page } from './alpha4.page';

describe('Alpha4Page', () => {
  let component: Alpha4Page;
  let fixture: ComponentFixture<Alpha4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
