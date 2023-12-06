import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha12PageRoutingModule } from './alpha12-routing.module';

import { Alpha12Page } from './alpha12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha12PageRoutingModule
  ],
  declarations: [Alpha12Page]
})
export class Alpha12PageModule {}
