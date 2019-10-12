import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalItinerarioPage } from '../../modals/modal-itinerario/modal-itinerario.page';

@Component({
  selector: 'app-crear-itinerario',
  templateUrl: './crear-itinerario.page.html',
  styleUrls: ['./crear-itinerario.page.scss'],
})
export class CrearItinerarioPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    // await modal = await this.modalController.create({
    //   component: ModalItinerarioPage
    // });
    // return await modal.present();
    const modal = await this.modalController.create({
      component: ModalItinerarioPage,
      componentProps: {}
    });
    modal.onDidDismiss()
    .then((data) => {
      console.log(data);
      
    });
    await modal.present();
  }

}
