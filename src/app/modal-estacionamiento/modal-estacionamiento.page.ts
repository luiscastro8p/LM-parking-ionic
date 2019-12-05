import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-estacionamiento',
  templateUrl: './modal-estacionamiento.page.html',
  styleUrls: ['./modal-estacionamiento.page.scss'],
})
export class ModalEstacionamientoPage implements OnInit {
 
  usuario = {
    nombre: "",
    direccion: "",
    espacios: "",
    tipo:""
  };
  tipo =[];
  constructor(private modalCtrl: ModalController, public reg:RegisterService,public route:Router) { }

  ngOnInit() {
    this.reg.getTipo().subscribe(resp =>{
      console.log(resp)
      this.tipo = resp;
    })
  }
  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }
  send(form){
   console.log(form)
    let obj:any = {
      nombre: form.nombre,
      direccion: form.direccion,
      espacios: form.espacios,
      tipo: form.tipo
    }
    this.reg.post(obj).subscribe(res =>{
    })

    this.salirSinArgumentos();
    this.usuario = {
      nombre: "",
      direccion: "",
      espacios: "",
      tipo:""
    };
    };
  
    
  
}
