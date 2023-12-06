import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha18PageRoutingModule } from './alpha18-routing.module';

import { Alpha18Page } from './alpha18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha18PageRoutingModule
  ],
  declarations: [Alpha18Page]
})
export class Alpha18PageModule {}
