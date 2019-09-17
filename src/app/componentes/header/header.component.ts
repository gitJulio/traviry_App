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
                  this.perfil=true;
                  this.muro=false;
                } 
                if (this.ruta.url == '/muro') {
                  this.muro=true;
                  this.perfil=false;
                } 
              }
          }
    );
  }

  async navegar(ruta){
    if(ruta==1){
      this.ruta.navigateByUrl('/muro')
    }
    if(ruta==3){
      this.ruta.navigateByUrl('/perfil')
    }
  }

}
