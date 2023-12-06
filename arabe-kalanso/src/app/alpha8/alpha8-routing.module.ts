import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha8Page } from './alpha8.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha8PageRoutingModule {}
