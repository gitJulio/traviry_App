import { Component, OnInit,Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-itinerario',
  templateUrl: './modal-itinerario.page.html',
  styleUrls: ['./modal-itinerario.page.scss'],
})
export class ModalItinerarioPage implements OnInit {

  constructor(public modalController:ModalController) { }

  ngOnInit() {
  }

  cerrar() {
    this.modalController.dismiss();
  }

}
