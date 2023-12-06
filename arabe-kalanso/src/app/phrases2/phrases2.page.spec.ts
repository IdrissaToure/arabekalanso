import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Phrases2Page } from './phrases2.page';

describe('Phrases2Page', () => {
  let component: Phrases2Page;
  let fixture: ComponentFixture<Phrases2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Phrases2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
