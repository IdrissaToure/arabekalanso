import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhrasesPage } from './phrases.page';

describe('PhrasesPage', () => {
  let component: PhrasesPage;
  let fixture: ComponentFixture<PhrasesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PhrasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
