import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha23PageRoutingModule } from './alpha23-routing.module';

import { Alpha23Page } from './alpha23.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha23PageRoutingModule
  ],
  declarations: [Alpha23Page]
})
export class Alpha23PageModule {}
