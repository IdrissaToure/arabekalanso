import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha22PageRoutingModule } from './alpha22-routing.module';

import { Alpha22Page } from './alpha22.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha22PageRoutingModule
  ],
  declarations: [Alpha22Page]
})
export class Alpha22PageModule {}
