import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha18Page } from './alpha18.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha18PageRoutingModule {}
