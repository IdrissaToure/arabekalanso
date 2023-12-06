import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mots3Page } from './mots3.page';

describe('Mots3Page', () => {
  let component: Mots3Page;
  let fixture: ComponentFixture<Mots3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Mots3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
