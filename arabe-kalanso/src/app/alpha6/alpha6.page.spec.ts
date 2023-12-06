import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha6Page } from './alpha6.page';

describe('Alpha6Page', () => {
  let component: Alpha6Page;
  let fixture: ComponentFixture<Alpha6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
