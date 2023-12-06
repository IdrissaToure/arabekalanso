import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha12Page } from './alpha12.page';

describe('Alpha12Page', () => {
  let component: Alpha12Page;
  let fixture: ComponentFixture<Alpha12Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
