import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha12Page } from './alpha12.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha12PageRoutingModule {}
