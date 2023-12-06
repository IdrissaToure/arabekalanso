import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Phrases2Page } from './phrases2.page';

const routes: Routes = [
  {
    path: '',
    component: Phrases2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Phrases2PageRoutingModule {}
