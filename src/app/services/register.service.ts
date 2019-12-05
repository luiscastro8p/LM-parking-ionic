import { EstacionamientoModel } from './../models/Estacionamiento.model';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take, delay } from 'rxjs/operators';


export interface Idea {
  id?: string,
  name: string,
  notes: string
}
 
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = "https://lm-smart-parking.firebaseio.com/";

  constructor(private http: HttpClient) {}
 

 
  post(data) {
    return this.http.post(`${this.url}/Estacionamiento.json`, data).pipe(
      map((resp: any) => {
         data.id = resp.name;
        return data.json;
      })
    );
  }
  postTipo(data) {
    return this.http.post(`${this.url}/tipos.json`, data).pipe(
      map((resp: any) => {
        // data.id = resp.name;
        return data.json;
      })
    );
  }
  postEmpleado(data) {
    return this.http.post(`${this.url}/Estacionamiento/-LvD8KzhF-D8ynmOGeLv/empleados.json`, data).pipe(
      map((resp: any) => {
        data.id = resp.name;
        return data.json;
      })
    );
  }
  getEstacionamiento() {
    return this.http.get(`${this.url}/Estacionamiento.json`)
    .pipe(
      map(resp => this.creararreglo(resp))
    );
  }
  getEmpleado() {
    return this.http.get(`${this.url}/Estacionamiento/-LvD8KzhF-D8ynmOGeLv/empleados.json`)
    .pipe(
      map(resp => this.creararreglo(resp)),
      delay(500)
    );
  }
  getTipo() {
    return this.http.get(`${this.url}/tipos.json`)
    .pipe(
      map(resp => this.creararreglo(resp)),
      delay(500)
    );
  }
  

  private creararreglo(temp:object){
    const temperatura:EstacionamientoModel[] =[];
    if (temp == null) {
      return [];
    } else {
      Object.keys(temp).forEach(key => {
        const esti: EstacionamientoModel = temp[key];
        esti.id = key;
        temperatura.push(esti);
      });
    }
    return temperatura;
  }
  borrarDatos(id: string) {
    return this.http.delete(`${this.url}/datatemp/${id}.json`);
  }
 
}