import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha26Page } from './alpha26.page';

describe('Alpha26Page', () => {
  let component: Alpha26Page;
  let fixture: ComponentFixture<Alpha26Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha26Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
