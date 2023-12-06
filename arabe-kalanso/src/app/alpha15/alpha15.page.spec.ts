import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha15Page } from './alpha15.page';

describe('Alpha15Page', () => {
  let component: Alpha15Page;
  let fixture: ComponentFixture<Alpha15Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
