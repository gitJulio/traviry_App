import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ItinerariosService} from '../../servicios/itinerarios/itinerarios.service'
@Component({
  selector: 'app-lista-itinerarios',
  templateUrl: './lista-itinerarios.page.html',
  styleUrls: ['./lista-itinerarios.page.scss'],
})
export class ListaItinerariosPage implements OnInit {

  listaItinerarios:any;
  constructor(
    public modalController:ModalController,
    public itinerario:ItinerariosService
    ) { }

  async ngOnInit() {
    await this.cargarItinerarios();
  }
  
  cerrar() {
    this.modalController.dismiss();
  }

  async cargarItinerarios(){
    this.listaItinerarios=await this.itinerario.getItinerarios()
    console.log(this.listaItinerarios);
  }

}
