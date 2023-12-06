import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha27Page } from './alpha27.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha27Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha27PageRoutingModule {}
