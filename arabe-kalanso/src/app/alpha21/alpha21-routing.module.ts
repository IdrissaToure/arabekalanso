import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha21Page } from './alpha21.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha21PageRoutingModule {}
