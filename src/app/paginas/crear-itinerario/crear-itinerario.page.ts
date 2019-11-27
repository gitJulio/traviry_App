import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalItinerarioPage } from '../../modals/modal-itinerario/modal-itinerario.page';
import { Storage } from '@ionic/storage';
import { ItinerariosService } from 'src/app/servicios/itinerarios/itinerarios.service';
import { Router } from '@angular/router';
import { ListaItinerariosPage } from 'src/app/modals/lista-itinerarios/lista-itinerarios.page';
import { ViewItinerarioPage } from 'src/app/modals/view-itinerario/view-itinerario.page';


@Component({
  selector: 'app-crear-itinerario',
  templateUrl: './crear-itinerario.page.html',
  styleUrls: ['./crear-itinerario.page.scss'],
})
export class CrearItinerarioPage implements OnInit {

  itinerario:any={
    direccion:{
      coords:'',
      lugar:''
    }
  }
  lista_itinerario:any;
  itinerario_a_modal:any;
  constructor(
              public modalController: ModalController,
              private storage: Storage,
              private _itinerario:ItinerariosService,
              private ruta:Router
            ) { }

  ngOnInit() {
  }

  ionViewWillEnter (){
    this.getItinerario();
  }

  
  async getItinerario(){
    this.lista_itinerario=await this._itinerario.getItinerarios();
    this.itinerario_a_modal=await this._itinerario.getItinerarios();
    this.lista_itinerario.forEach(item=>{
      if(item.nombre_itinerario.length>16){
        item.nombre_itinerario=item.nombre_itinerario.substr(0,15)+'..'        
      }
    })
  }

  async presentModal() {
    // await modal = await this.modalController.create({
    //   component: ModalItinerarioPage
    // });
    // return await modal.present();
    const modal = await this.modalController.create({
      component: ModalItinerarioPage,
      componentProps: {value:this.itinerario.direccion}
    });
    modal.onDidDismiss()
    .then((data) => {
      console.log(JSON.stringify(data.data));

    });
    await modal.present();
  }

  async listaItinerarioModal(i) {
 
    const modal = await this.modalController.create({
      component: ViewItinerarioPage,
      componentProps: {value:this.itinerario_a_modal[i]}
    });
    modal.onDidDismiss()
    .then((data) => {

    });
    await modal.present();
  }



  async ir_itinerario(){
    console.log("aaaa");
    this.ruta.navigate(['/view-itinerario'])
    
  }



}
