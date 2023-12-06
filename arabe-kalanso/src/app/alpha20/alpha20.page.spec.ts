import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha20Page } from './alpha20.page';

describe('Alpha20Page', () => {
  let component: Alpha20Page;
  let fixture: ComponentFixture<Alpha20Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha20Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
