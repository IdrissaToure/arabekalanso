import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha28Page } from './alpha28.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha28Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha28PageRoutingModule {}
