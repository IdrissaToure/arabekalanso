import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha14PageRoutingModule } from './alpha14-routing.module';

import { Alpha14Page } from './alpha14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha14PageRoutingModule
  ],
  declarations: [Alpha14Page]
})
export class Alpha14PageModule {}
