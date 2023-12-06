import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha18Page } from './alpha18.page';

describe('Alpha18Page', () => {
  let component: Alpha18Page;
  let fixture: ComponentFixture<Alpha18Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha18Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
