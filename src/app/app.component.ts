import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  es_login:any=false;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private ruta:Router
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.ruta.events.subscribe(
     async (event: any) => {
       if (event instanceof NavigationEnd) {
           if (this.ruta.url == '/home' || this.ruta.url == '/login' || this.ruta.url == '/registro') {
             this.es_login = true;
           } else {
             this.es_login = false;
           }
         }
     }
 );
 
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
