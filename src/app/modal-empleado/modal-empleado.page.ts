import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-modal-empleado',
  templateUrl: './modal-empleado.page.html',
  styleUrls: ['./modal-empleado.page.scss'],
})
export class ModalEmpleadoPage implements OnInit {
  estacionamiento = [];
  usuario = {
    nombre: "",
    apellido: "",
    estacionamiento: "",
    rol:""
  };
  constructor(private modalCtrl: ModalController, public reg:RegisterService) { }

  ngOnInit() {
    this.reg.getEstacionamiento().subscribe(resp => {
      console.log(resp)
      this.estacionamiento = resp
    })
  }
  salirSinArgumentos() {
    this.modalCtrl.dismiss();
  }
  send(form){
   console.log(form)
    let obj:any = {
      nombre: form.nombre,
      apellido: form.apellido,
      estacionamiento: form.estacionamiento,
      rol:form.rol
    }
    this.reg.postEmpleado(obj).subscribe(res =>{

    })
    this.salirSinArgumentos();
    };
  

}

