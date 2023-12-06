import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha25PageRoutingModule } from './alpha25-routing.module';

import { Alpha25Page } from './alpha25.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha25PageRoutingModule
  ],
  declarations: [Alpha25Page]
})
export class Alpha25PageModule {}
