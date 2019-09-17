import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  muro:boolean=false;
  add:boolean=false;
  perfil:boolean=false;
  chat:boolean=false;
  buscar:boolean=false;
  notificaciones:boolean=false;
  constructor(
          public ruta:Router
  ) { }

  ngOnInit() {

   this.ruta.events.subscribe(
    async (event: any) => {
      if (event instanceof NavigationEnd) {
                if (this.ruta.url == '/perfil') {
                  this.muro=false;
                  this.add=false;
                  this.perfil=true;
                  this.chat=false;
                  this.buscar=false;
                  this.notificaciones=false;
                } 
                if (this.ruta.url == '/crear-itinerario') {
                  this.muro=false;
                  this.add=true;
                  this.perfil=false;
                  this.chat=false;
                  this.buscar=false;
                  this.notificaciones=false;
                } 
                if (this.ruta.url == '/muro') {
                  this.muro=true;
                  this.add=false;
                  this.perfil=false;
                  this.chat=false;
                  this.buscar=false;
                  this.notificaciones=false;
                } 
              }
          }
    );
  }

  async navegar(ruta){
    if(ruta==1){
      this.ruta.navigateByUrl('/muro')
    }
    if(ruta==2){
      this.ruta.navigateByUrl('/crear-itinerario')
    }
    if(ruta==3){
      this.ruta.navigateByUrl('/perfil')
    }
  }

}
