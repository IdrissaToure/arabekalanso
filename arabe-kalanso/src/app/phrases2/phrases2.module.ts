import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Phrases2PageRoutingModule } from './phrases2-routing.module';

import { Phrases2Page } from './phrases2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Phrases2PageRoutingModule
  ],
  declarations: [Phrases2Page]
})
export class Phrases2PageModule {}
