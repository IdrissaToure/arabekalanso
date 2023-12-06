import { ConnexionPage } from './connexion/connexion.page';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from'@angular/core';


const routes: Routes = [


  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then(m => m.ConnexionPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./connexion/connexion.module').then(m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)

  },
  {
    path: '',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'alphabet',
    loadChildren: () => import('./alphabet/alphabet.module').then( m => m.AlphabetPageModule)
  },
  {
    path: 'mots',
    loadChildren: () => import('./mots1/mots.module').then( m => m.MotsPageModule)
  },
  {
    path: 'phrases',
    loadChildren: () => import('./phrases1/phrases.module').then( m => m.PhrasesPageModule)
  },

  {
    path: 'mots2',
    loadChildren: () => import('./mots2/mots2.module').then( m => m.Mots2PageModule)
  },
  {
    path: 'alpha1',
    loadChildren: () => import('./alpha1/alpha1.module').then( m => m.Alpha1PageModule)
  },
  {
    path: 'alpha2',
    loadChildren: () => import('./alpha2/alpha2.module').then( m => m.Alpha2PageModule)
  },
  {
    path: 'alpha3',
    loadChildren: () => import('./alpha3/alpha3.module').then( m => m.Alpha3PageModule)
  },
  {
    path: 'alpha4',
    loadChildren: () => import('./alpha4/alpha4.module').then( m => m.Alpha4PageModule)
  },
  {
    path: 'alpha5',
    loadChildren: () => import('./alpha5/alpha5.module').then( m => m.Alpha5PageModule)
  },
  {
    path: 'alpha6',
    loadChildren: () => import('./alpha6/alpha6.module').then( m => m.Alpha6PageModule)
  },
  {
    path: 'alpha7',
    loadChildren: () => import('./alpha7/alpha7.module').then( m => m.Alpha7PageModule)
  },
  {
    path: 'alpha8',
    loadChildren: () => import('./alpha8/alpha8.module').then( m => m.Alpha8PageModule)
  },
  {
    path: 'alpha9',
    loadChildren: () => import('./alpha9/alpha9.module').then( m => m.Alpha9PageModule)
  },
  {
    path: 'alpha10',
    loadChildren: () => import('./alpha10/alpha10.module').then( m => m.Alpha10PageModule)
  },
  {
    path: 'alpha11',
    loadChildren: () => import('./alpha11/alpha11.module').then( m => m.Alpha11PageModule)
  },
  {
    path: 'alpha12',
    loadChildren: () => import('./alpha12/alpha12.module').then( m => m.Alpha12PageModule)
  },
  {
    path: 'alpha13',
    loadChildren: () => import('./alpha13/alpha13.module').then( m => m.Alpha13PageModule)
  },
  {
    path: 'alpha14',
    loadChildren: () => import('./alpha14/alpha14.module').then( m => m.Alpha14PageModule)
  },
  {
    path: 'alpha15',
    loadChildren: () => import('./alpha15/alpha15.module').then( m => m.Alpha15PageModule)
  },
  {
    path: 'alpha16',
    loadChildren: () => import('./alpha16/alpha16.module').then( m => m.Alpha16PageModule)
  },
  {
    path: 'alpha17',
    loadChildren: () => import('./alpha17/alpha17.module').then( m => m.Alpha17PageModule)
  },
  {
    path: 'alpha18',
    loadChildren: () => import('./alpha18/alpha18.module').then( m => m.Alpha18PageModule)
  },
  {
    path: 'alpha19',
    loadChildren: () => import('./alpha19/alpha19.module').then( m => m.Alpha19PageModule)
  },
  {
    path: 'alpha20',
    loadChildren: () => import('./alpha20/alpha20.module').then( m => m.Alpha20PageModule)
  },
  {
    path: 'alpha21',
    loadChildren: () => import('./alpha21/alpha21.module').then( m => m.Alpha21PageModule)
  },
  {
    path: 'alpha22',
    loadChildren: () => import('./alpha22/alpha22.module').then( m => m.Alpha22PageModule)
  },
  {
    path: 'alpha23',
    loadChildren: () => import('./alpha23/alpha23.module').then( m => m.Alpha23PageModule)
  },
  {
    path: 'alpha24',
    loadChildren: () => import('./alpha24/alpha24.module').then( m => m.Alpha24PageModule)
  },
  {
    path: 'alpha25',
    loadChildren: () => import('./alpha25/alpha25.module').then( m => m.Alpha25PageModule)
  },
  {
    path: 'alpha26',
    loadChildren: () => import('./alpha26/alpha26.module').then( m => m.Alpha26PageModule)
  },
  {
    path: 'alpha27',
    loadChildren: () => import('./alpha27/alpha27.module').then( m => m.Alpha27PageModule)
  },
  {
    path: 'alpha28',
    loadChildren: () => import('./alpha28/alpha28.module').then( m => m.Alpha28PageModule)
  },
  {
    path: 'mots3',
    loadChildren: () => import('./mots3/mots3.module').then( m => m.Mots3PageModule)
  },
  {
    path: 'mots4',
    loadChildren: () => import('./mots4/mots4.module').then( m => m.Mots4PageModule)
  },
  {
    path: 'phrases2',
    loadChildren: () => import('./phrases2/phrases2.module').then( m => m.Phrases2PageModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
