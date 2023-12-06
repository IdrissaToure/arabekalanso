import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha8PageRoutingModule } from './alpha8-routing.module';

import { Alpha8Page } from './alpha8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha8PageRoutingModule
  ],
  declarations: [Alpha8Page]
})
export class Alpha8PageModule {}
