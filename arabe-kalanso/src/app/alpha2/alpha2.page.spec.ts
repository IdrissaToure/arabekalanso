import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha2Page } from './alpha2.page';

describe('Alpha2Page', () => {
  let component: Alpha2Page;
  let fixture: ComponentFixture<Alpha2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
