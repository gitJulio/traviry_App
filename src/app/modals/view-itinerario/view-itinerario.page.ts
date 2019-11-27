import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-view-itinerario',
  templateUrl: './view-itinerario.page.html',
  styleUrls: ['./view-itinerario.page.scss'],
})
export class ViewItinerarioPage implements OnInit {

  puntos:any;
  constructor(
                private modalController:ModalController,
                private navParams: NavParams
  ) { }

  ionViewWillEnter(){
    this.puntos = this.navParams.get('value');
    this.puntos.modal=1;    
  }
  

  ngOnInit() {
  }

  cerrar() {
    this.modalController.dismiss();
  }


}
