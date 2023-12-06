import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha14Page } from './alpha14.page';

describe('Alpha14Page', () => {
  let component: Alpha14Page;
  let fixture: ComponentFixture<Alpha14Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
