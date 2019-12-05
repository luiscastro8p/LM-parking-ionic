import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEmpleadoPage } from './modal-empleado.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEmpleadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEmpleadoPageRoutingModule {}
