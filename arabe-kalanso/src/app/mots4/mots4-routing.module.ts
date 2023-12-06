import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mots4Page } from './mots4.page';

const routes: Routes = [
  {
    path: '',
    component: Mots4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mots4PageRoutingModule {}
