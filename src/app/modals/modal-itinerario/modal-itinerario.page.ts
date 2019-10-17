import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { MapaDireccionPage } from '../../modals/mapa-direccion/mapa-direccion.page'

@Component({
  selector: 'app-modal-itinerario',
  templateUrl: './modal-itinerario.page.html',
  styleUrls: ['./modal-itinerario.page.scss'],
})
export class ModalItinerarioPage implements OnInit {

  constructor(public modalController:ModalController) { }

   a:any='';

  public anArray:any=[];

  inputInHabilitado:any=false
  contadorDescripcion:any=0;
  contadorGasto:any=0;
  contadorTipo:any=0;
  itinerario:any={
    nombre:'',
    puntos:[
      {
        descripcion:'',
        gasto:'',
        tipo:'',
        lugar:''
      }
    ]
  }
  ngOnInit() {

  }

  cerrar() {
    this.modalController.dismiss(this.itinerario);
  }

  agregarPunto(){

    this.itinerario.puntos.push({
      descripcion: '',
      gasto:'',
      tipo:''
    })
    
    console.log(this.itinerario.puntos);
    
  }

  async mapa() {
    console.log("aaaaaaa");
    
    // await modal = await this.modalController.create({
    //   component: ModalItinerarioPage
    // });
    // return await modal.present();
    const modal = await this.modalController.create({
      component: MapaDireccionPage,
      componentProps: {}
    });
    modal.onDidDismiss()
    .then((data) => {
      console.log(data);
      
    });
    await modal.present();
  }
  saluda(){
    // console.log(index,valor,valor2,valor3);   
    // console.log(this.itinerario.puntos);
    
  }





}
