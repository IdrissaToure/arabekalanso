import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhrasesPage } from './phrases.page';

const routes: Routes = [
  {
    path: '',
    component: PhrasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhrasesPageRoutingModule {}
