import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha14Page } from './alpha14.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha14PageRoutingModule {}
