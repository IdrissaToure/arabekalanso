import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha2Page } from './alpha2.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha2PageRoutingModule {}
