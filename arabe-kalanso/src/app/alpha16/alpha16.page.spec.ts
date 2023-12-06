import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha16Page } from './alpha16.page';

describe('Alpha16Page', () => {
  let component: Alpha16Page;
  let fixture: ComponentFixture<Alpha16Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha16Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
