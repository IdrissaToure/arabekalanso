import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Alpha11Page } from './alpha11.page';

describe('Alpha11Page', () => {
  let component: Alpha11Page;
  let fixture: ComponentFixture<Alpha11Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Alpha11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
