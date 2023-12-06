import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha1PageRoutingModule } from './alpha1-routing.module';

import { Alpha1Page } from './alpha1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha1PageRoutingModule
  ],
  declarations: [Alpha1Page]
})
export class Alpha1PageModule {}
