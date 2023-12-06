import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionPage } from './inscription.page';

const routes: Routes = [
  {
    path: 'inscriptio',
    component: InscriptionPage
  },
  {
    path: '',
    component: InscriptionPage
  },
  // {
  //   path: 'service',
  //   loadChildren: () => import('./service/service.module').then( m => m.ServicePageModule)
  // },

  // {
  //   path: '',
  //   loadChildren: () => import('./service/service.module').then( m => m.ServicePageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionPageRoutingModule {}
