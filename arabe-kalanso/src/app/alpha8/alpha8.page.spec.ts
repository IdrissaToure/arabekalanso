import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha8Page } from './alpha8.page';

describe('Alpha8Page', () => {
  let component: Alpha8Page;
  let fixture: ComponentFixture<Alpha8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
