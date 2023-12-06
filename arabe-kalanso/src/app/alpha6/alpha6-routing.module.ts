import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha6Page } from './alpha6.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha6PageRoutingModule {}
