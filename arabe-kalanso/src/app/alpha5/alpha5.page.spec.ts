import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha5Page } from './alpha5.page';

describe('Alpha5Page', () => {
  let component: Alpha5Page;
  let fixture: ComponentFixture<Alpha5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
