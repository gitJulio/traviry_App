import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

/*********Modals******************** */
import {ModalItinerarioPage} from './modals/modal-itinerario/modal-itinerario.page'
import {ListaItinerariosPage} from './modals/lista-itinerarios/lista-itinerarios.page'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './componentes/components.module';

import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { Geolocation } from '@ionic-native/geolocation/ngx';

import {MapaDireccionPage} from './modals/mapa-direccion/mapa-direccion.page'

@NgModule({
  declarations: [AppComponent,ModalItinerarioPage,ListaItinerariosPage,MapaDireccionPage],
  entryComponents: [ModalItinerarioPage,ListaItinerariosPage,MapaDireccionPage],
  imports: [
    BrowserModule, 
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(), 
    AppRoutingModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
