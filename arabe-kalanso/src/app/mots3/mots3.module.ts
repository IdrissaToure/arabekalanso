import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mots3PageRoutingModule } from './mots3-routing.module';

import { Mots3Page } from './mots3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mots3PageRoutingModule
  ],
  declarations: [Mots3Page]
})
export class Mots3PageModule {}
