import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha10PageRoutingModule } from './alpha10-routing.module';

import { Alpha10Page } from './alpha10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha10PageRoutingModule
  ],
  declarations: [Alpha10Page]
})
export class Alpha10PageModule {}
