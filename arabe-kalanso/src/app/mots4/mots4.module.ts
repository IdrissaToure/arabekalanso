import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mots4PageRoutingModule } from './mots4-routing.module';

import { Mots4Page } from './mots4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mots4PageRoutingModule
  ],
  declarations: [Mots4Page]
})
export class Mots4PageModule {}
