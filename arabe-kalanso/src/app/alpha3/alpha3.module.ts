import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha3PageRoutingModule } from './alpha3-routing.module';

import { Alpha3Page } from './alpha3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha3PageRoutingModule
  ],
  declarations: [Alpha3Page]
})
export class Alpha3PageModule {}
