import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha25Page } from './alpha25.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha25Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha25PageRoutingModule {}
