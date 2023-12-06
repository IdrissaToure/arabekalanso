import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha15Page } from './alpha15.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha15PageRoutingModule {}
