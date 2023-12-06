import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha27PageRoutingModule } from './alpha27-routing.module';

import { Alpha27Page } from './alpha27.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha27PageRoutingModule
  ],
  declarations: [Alpha27Page]
})
export class Alpha27PageModule {}
