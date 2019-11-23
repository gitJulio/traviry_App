import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalItinerarioPage } from '../../modals/modal-itinerario/modal-itinerario.page';
import { Storage } from '@ionic/storage';


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
  constructor(
              public modalController: ModalController,
               private storage: Storage
            ) { }

  ngOnInit() {
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



}
