import { Component, OnInit } from "@angular/core";
import { RegisterService } from "../services/register.service";
import { Observable } from "rxjs";
import { LoadingController, ActionSheetController, ModalController } from '@ionic/angular';
import { ModalEstacionamientoPage } from '../modal-estacionamiento/modal-estacionamiento.page';
import { EstacionamientoModel } from '../models/Estacionamiento.model';

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page implements OnInit {
  loading: any;
  estacionamiento:EstacionamientoModel[] = [];
  constructor(public reg: RegisterService,public modalCtrl:ModalController) {}
  
  
  ngOnInit() {
  this.reg.getEstacionamiento().subscribe(resp =>{
    this.estacionamiento = resp;
    console.log(resp)
  })
  }
  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: ModalEstacionamientoPage,
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
      this.reg.getEstacionamiento().subscribe((resp:any) => {
        this.estacionamiento = resp;
      });
    }, 500);
  
 
 }
 
}
