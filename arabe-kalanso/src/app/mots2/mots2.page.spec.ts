import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mots2Page } from './mots2.page';

describe('Mots2Page', () => {
  let component: Mots2Page;
  let fixture: ComponentFixture<Mots2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Mots2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
