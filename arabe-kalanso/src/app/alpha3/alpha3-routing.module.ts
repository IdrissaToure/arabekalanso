import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha3Page } from './alpha3.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha3PageRoutingModule {}
