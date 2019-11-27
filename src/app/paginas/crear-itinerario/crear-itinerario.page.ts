import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalItinerarioPage } from '../../modals/modal-itinerario/modal-itinerario.page';
import { Storage } from '@ionic/storage';
import { ItinerariosService } from 'src/app/servicios/itinerarios/itinerarios.service';
import { Router } from '@angular/router';


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

  async getItinerario(){
    this.lista_itinerario=await this._itinerario.getItinerarios();
    this.lista_itinerario.forEach(item=>{
      if(item.nombre_itinerario.length>16){
        item.nombre_itinerario=item.nombre_itinerario.substr(0,15)+'..'        
      }
    })
  }

  async ir_itinerario(){
    console.log("aaaa");
    this.ruta.navigate(['/view-itinerario'])
    
  }



}
