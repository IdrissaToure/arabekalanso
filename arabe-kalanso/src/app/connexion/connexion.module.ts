import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnexionPageRoutingModule } from './connexion-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { ConnexionPage } from './connexion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnexionPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ConnexionPage]
})
export class ConnexionPageModule {}
