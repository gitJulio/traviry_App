import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {ModalItinerarioPage} from './modals/modal-itinerario/modal-itinerario.page'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './componentes/components.module';

import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent,ModalItinerarioPage],
  entryComponents: [ModalItinerarioPage],
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
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
