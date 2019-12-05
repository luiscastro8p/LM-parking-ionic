import { Idea } from './../services/register.service';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  constructor(public reg: RegisterService,) {}

 ngOnInit() {  
 }
}
