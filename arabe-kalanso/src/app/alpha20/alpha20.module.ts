import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha20PageRoutingModule } from './alpha20-routing.module';

import { Alpha20Page } from './alpha20.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha20PageRoutingModule
  ],
  declarations: [Alpha20Page]
})
export class Alpha20PageModule {}
