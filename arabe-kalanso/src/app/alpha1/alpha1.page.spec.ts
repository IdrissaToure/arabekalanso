import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha1Page } from './alpha1.page';

describe('Alpha1Page', () => {
  let component: Alpha1Page;
  let fixture: ComponentFixture<Alpha1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
