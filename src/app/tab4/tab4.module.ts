import { ModalEmpleadoPageModule } from './../modal-empleado/modal-empleado.module';
import { ModalEmpleadoPage } from './../modal-empleado/modal-empleado.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';

@NgModule({
  entryComponents:[
    ModalEmpleadoPage
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab4Page }]),
    ModalEmpleadoPageModule
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
