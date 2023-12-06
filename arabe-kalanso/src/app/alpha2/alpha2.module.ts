import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha2PageRoutingModule } from './alpha2-routing.module';

import { Alpha2Page } from './alpha2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha2PageRoutingModule
  ],
  declarations: [Alpha2Page]
})
export class Alpha2PageModule {}
