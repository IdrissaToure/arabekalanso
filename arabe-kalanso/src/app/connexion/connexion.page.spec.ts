import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import * as connexionPage from './connexion.page';

describe('ConnexionPage', () => {
  let component: connexionPage.ConnexionPage;
  let fixture: ComponentFixture<connexionPage.ConnexionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(connexionPage.ConnexionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
