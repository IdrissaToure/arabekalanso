import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha11Page } from './alpha11.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha11PageRoutingModule {}
