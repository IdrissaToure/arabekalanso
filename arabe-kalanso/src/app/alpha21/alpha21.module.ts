import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha21PageRoutingModule } from './alpha21-routing.module';

import { Alpha21Page } from './alpha21.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha21PageRoutingModule
  ],
  declarations: [Alpha21Page]
})
export class Alpha21PageModule {}
