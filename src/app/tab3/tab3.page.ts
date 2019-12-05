import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";
import {  RegisterService } from '../services/register.service';

declare var google;
@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page implements OnInit {


  loading: any;
  usuario = {
    tipo: "",
    descripcion: "",
  };
  constructor(
    private router: Router,
    private estaService:RegisterService
   
  ) {}

 
  ngOnInit() {}

  send(form) {
    console.log(form)
    let obj = {
      tipo: form.tipo,
      descripcion:form.descripcion
    }
    this.estaService.postTipo(obj).subscribe(res =>{
      console.log(res);
      this.usuario = {
        tipo: "",
        descripcion: "",
      };
    })
  
  
  }
 
}
