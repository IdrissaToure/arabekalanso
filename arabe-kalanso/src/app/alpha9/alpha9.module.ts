import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha9PageRoutingModule } from './alpha9-routing.module';

import { Alpha9Page } from './alpha9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha9PageRoutingModule
  ],
  declarations: [Alpha9Page]
})
export class Alpha9PageModule {}
