import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mots2Page } from './mots2.page';

const routes: Routes = [
  {
    path: '',
    component: Mots2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mots2PageRoutingModule {}
