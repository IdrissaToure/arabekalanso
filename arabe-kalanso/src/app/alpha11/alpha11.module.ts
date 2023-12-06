import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha11PageRoutingModule } from './alpha11-routing.module';

import { Alpha11Page } from './alpha11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha11PageRoutingModule
  ],
  declarations: [Alpha11Page]
})
export class Alpha11PageModule {}
