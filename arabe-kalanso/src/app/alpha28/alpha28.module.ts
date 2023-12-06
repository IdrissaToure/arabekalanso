import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha28PageRoutingModule } from './alpha28-routing.module';

import { Alpha28Page } from './alpha28.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha28PageRoutingModule
  ],
  declarations: [Alpha28Page]
})
export class Alpha28PageModule {}
