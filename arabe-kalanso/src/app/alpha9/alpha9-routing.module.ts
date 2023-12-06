import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha9Page } from './alpha9.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha9PageRoutingModule {}
