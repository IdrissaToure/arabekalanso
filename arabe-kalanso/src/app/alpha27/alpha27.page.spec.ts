import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha27Page } from './alpha27.page';

describe('Alpha27Page', () => {
  let component: Alpha27Page;
  let fixture: ComponentFixture<Alpha27Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha27Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
