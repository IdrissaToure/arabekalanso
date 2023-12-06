import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha23Page } from './alpha23.page';

describe('Alpha23Page', () => {
  let component: Alpha23Page;
  let fixture: ComponentFixture<Alpha23Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha23Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
