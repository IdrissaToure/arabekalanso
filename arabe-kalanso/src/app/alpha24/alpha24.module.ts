import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha24PageRoutingModule } from './alpha24-routing.module';

import { Alpha24Page } from './alpha24.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha24PageRoutingModule
  ],
  declarations: [Alpha24Page]
})
export class Alpha24PageModule {}
