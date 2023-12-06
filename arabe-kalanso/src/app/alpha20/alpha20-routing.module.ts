import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha20Page } from './alpha20.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha20Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha20PageRoutingModule {}
