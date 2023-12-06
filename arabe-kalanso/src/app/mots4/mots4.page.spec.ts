import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mots4Page } from './mots4.page';

describe('Mots4Page', () => {
  let component: Mots4Page;
  let fixture: ComponentFixture<Mots4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Mots4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
