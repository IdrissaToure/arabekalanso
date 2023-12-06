import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha28Page } from './alpha28.page';

describe('Alpha28Page', () => {
  let component: Alpha28Page;
  let fixture: ComponentFixture<Alpha28Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha28Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
