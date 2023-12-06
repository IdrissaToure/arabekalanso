import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha21Page } from './alpha21.page';

describe('Alpha21Page', () => {
  let component: Alpha21Page;
  let fixture: ComponentFixture<Alpha21Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha21Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
