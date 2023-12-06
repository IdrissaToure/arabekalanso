import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alpha16Page } from './alpha16.page';

const routes: Routes = [
  {
    path: '',
    component: Alpha16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alpha16PageRoutingModule {}
