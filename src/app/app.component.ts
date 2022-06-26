import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  titulo = 'Listado de Personas';

ngOnInit(): void {
  firebase.initializeApp({
    apiKey: 'AIzaSyBfEezSObsJ-b4pPFs46KaIPMp_sWm1X2g',
    authDomain: 'listadopersonas-4e9fa.firebaseapp.com'
  });
}
}
