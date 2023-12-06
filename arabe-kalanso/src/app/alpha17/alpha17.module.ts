import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alpha17PageRoutingModule } from './alpha17-routing.module';

import { Alpha17Page } from './alpha17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alpha17PageRoutingModule
  ],
  declarations: [Alpha17Page]
})
export class Alpha17PageModule {}
