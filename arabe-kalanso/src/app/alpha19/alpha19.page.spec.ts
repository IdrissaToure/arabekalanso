import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha19Page } from './alpha19.page';

describe('Alpha19Page', () => {
  let component: Alpha19Page;
  let fixture: ComponentFixture<Alpha19Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha19Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
