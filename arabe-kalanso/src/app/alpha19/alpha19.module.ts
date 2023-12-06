import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha19PageRoutingModule } from './alpha19-routing.module';

import { Alpha19Page } from './alpha19.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha19PageRoutingModule
  ],
  declarations: [Alpha19Page]
})
export class Alpha19PageModule {}
