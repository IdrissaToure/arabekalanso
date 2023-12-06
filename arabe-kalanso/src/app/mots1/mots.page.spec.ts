import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MotsPage } from './mots.page';

describe('MotsPage', () => {
  let component: MotsPage;
  let fixture: ComponentFixture<MotsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MotsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
