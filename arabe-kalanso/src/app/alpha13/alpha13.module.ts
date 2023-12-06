import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha13PageRoutingModule } from './alpha13-routing.module';

import { Alpha13Page } from './alpha13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha13PageRoutingModule
  ],
  declarations: [Alpha13Page]
})
export class Alpha13PageModule {}
