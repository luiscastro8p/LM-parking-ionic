import { ModalEstacionamientoPageModule } from './../modal-estacionamiento/modal-estacionamiento.module';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ModalEstacionamientoPage } from '../modal-estacionamiento/modal-estacionamiento.page';

@NgModule({
  entryComponents:[
    ModalEstacionamientoPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }]),
    ModalEstacionamientoPageModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
