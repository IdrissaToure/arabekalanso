import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha22Page } from './alpha22.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha22PageRoutingModule {}
