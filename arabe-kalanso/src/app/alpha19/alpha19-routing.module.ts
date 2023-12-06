import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha19Page } from './alpha19.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha19PageRoutingModule {}
