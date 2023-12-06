import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha7Page } from './alpha7.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha7PageRoutingModule {}
