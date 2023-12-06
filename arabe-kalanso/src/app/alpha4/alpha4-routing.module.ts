import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha4Page } from './alpha4.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha4PageRoutingModule {}
