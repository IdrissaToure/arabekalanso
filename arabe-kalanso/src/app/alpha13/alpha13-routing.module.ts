import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha13Page } from './alpha13.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha13PageRoutingModule {}
