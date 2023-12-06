import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhrasesPageRoutingModule } from './phrases-routing.module';

import { PhrasesPage } from './phrases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhrasesPageRoutingModule
  ],
  declarations: [PhrasesPage]
})
export class PhrasesPageModule {}
