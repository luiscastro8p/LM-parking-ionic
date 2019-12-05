import { EmpleadoModel } from './../models/empleado.model';
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { Router } from "@angular/router";
import { LoadingController, ModalController } from "@ionic/angular";
import { ModalEmpleadoPage } from "../modal-empleado/modal-empleado.page";
import { RegisterService } from '../services/register.service';

@Component({
  selector: "app-tab4",
  templateUrl: "tab4.page.html",
  styleUrls: ["tab4.page.scss"]
})
export class Tab4Page implements OnInit {
  empleados:EmpleadoModel[] = [];
  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public reg:RegisterService
  ) {}

  ngOnInit() {
    this.reg.getEmpleado().subscribe((res:any) =>{
      this.empleados = res;
      console.log(res)
    })

  }
  send() {}
  
  async abrirModal() {

    const modal = await this.modalCtrl.create({
      component: ModalEmpleadoPage,
      componentProps: {
        nombre: 'Fernando',
        pais: 'Costa Rica'
      }
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    console.log('Retorno del modal', data );

  }
  doRefresh( event ) {
    setTimeout(() => {
      event.target.complete();
      this.reg.getEmpleado().subscribe((resp:any) => {
        this.empleados = resp;
      });
    }, 500);
  
 
 }
}
