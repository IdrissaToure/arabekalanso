import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha7Page } from './alpha7.page';

describe('Alpha7Page', () => {
  let component: Alpha7Page;
  let fixture: ComponentFixture<Alpha7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
