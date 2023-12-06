import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mots3Page } from './mots3.page';

const routes: Routes = [
  {
    path: '',
    component: Mots3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mots3PageRoutingModule {}
