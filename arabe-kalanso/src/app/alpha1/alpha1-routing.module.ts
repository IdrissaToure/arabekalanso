import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha1Page } from './alpha1.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha1PageRoutingModule {}
