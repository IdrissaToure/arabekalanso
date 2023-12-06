import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha22Page } from './alpha22.page';

describe('Alpha22Page', () => {
  let component: Alpha22Page;
  let fixture: ComponentFixture<Alpha22Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha22Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
