import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha7PageRoutingModule } from './alpha7-routing.module';

import { Alpha7Page } from './alpha7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha7PageRoutingModule
  ],
  declarations: [Alpha7Page]
})
export class Alpha7PageModule {}
