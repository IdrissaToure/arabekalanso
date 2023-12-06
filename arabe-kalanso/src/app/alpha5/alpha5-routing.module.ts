import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha5Page } from './alpha5.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha5PageRoutingModule {}
