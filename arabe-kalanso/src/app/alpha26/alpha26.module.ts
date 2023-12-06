import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha26PageRoutingModule } from './alpha26-routing.module';

import { Alpha26Page } from './alpha26.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha26PageRoutingModule
  ],
  declarations: [Alpha26Page]
})
export class Alpha26PageModule {}
