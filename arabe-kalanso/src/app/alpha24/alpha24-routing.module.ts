import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha24Page } from './alpha24.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha24Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha24PageRoutingModule {}
