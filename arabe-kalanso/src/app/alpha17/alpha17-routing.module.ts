import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha17Page } from './alpha17.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha17PageRoutingModule {}
