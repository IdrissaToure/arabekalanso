import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha5PageRoutingModule } from './alpha5-routing.module';

import { Alpha5Page } from './alpha5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha5PageRoutingModule
  ],
  declarations: [Alpha5Page]
})
export class Alpha5PageModule {}
