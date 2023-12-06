import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha6PageRoutingModule } from './alpha6-routing.module';

import { Alpha6Page } from './alpha6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha6PageRoutingModule
  ],
  declarations: [Alpha6Page]
})
export class Alpha6PageModule {}
