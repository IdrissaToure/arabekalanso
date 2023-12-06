import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha23Page } from './alpha23.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha23Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha23PageRoutingModule {}
