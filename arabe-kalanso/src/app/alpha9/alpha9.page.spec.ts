import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha9Page } from './alpha9.page';

describe('Alpha9Page', () => {
  let component: Alpha9Page;
  let fixture: ComponentFixture<Alpha9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
