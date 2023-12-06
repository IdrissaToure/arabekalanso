import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha15PageRoutingModule } from './alpha15-routing.module';

import { Alpha15Page } from './alpha15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha15PageRoutingModule
  ],
  declarations: [Alpha15Page]
})
export class Alpha15PageModule {}
