import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha4PageRoutingModule } from './alpha4-routing.module';

import { Alpha4Page } from './alpha4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha4PageRoutingModule
  ],
  declarations: [Alpha4Page]
})
export class Alpha4PageModule {}
