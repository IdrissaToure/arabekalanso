import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha16PageRoutingModule } from './alpha16-routing.module';

import { Alpha16Page } from './alpha16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha16PageRoutingModule
  ],
  declarations: [Alpha16Page]
})
export class Alpha16PageModule {}
