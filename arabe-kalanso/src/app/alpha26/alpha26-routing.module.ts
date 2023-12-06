import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha26Page } from './alpha26.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha26Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha26PageRoutingModule {}
