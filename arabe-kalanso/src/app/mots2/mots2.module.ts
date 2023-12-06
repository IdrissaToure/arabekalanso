import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mots2PageRoutingModule } from './mots2-routing.module';

import { Mots2Page } from './mots2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mots2PageRoutingModule
  ],
  declarations: [Mots2Page]
})
export class Mots2PageModule {}
