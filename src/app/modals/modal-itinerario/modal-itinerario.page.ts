import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { MapaDireccionPage } from '../../modals/mapa-direccion/mapa-direccion.page'
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-modal-itinerario',
  templateUrl: './modal-itinerario.page.html',
  styleUrls: ['./modal-itinerario.page.scss'],
})
export class ModalItinerarioPage implements OnInit {

  constructor(
            public geolocation:Geolocation,
            public modalController:ModalController,
             private storage: Storage
  ) { }



  public anArray:any=[];

  inputInHabilitado:any=false
  contadorDescripcion:any=0;
  contadorGasto:any=0;
  contadorTipo:any=0;
  coords:any={
    lat:'',
    lng:''
  }
  itinerario:any={
    id_usuario:'',
    nombre:'',
    fecha:'',
    puntos:[
      {
        descripcion:'',
        fecha_punto:'',
        gasto:'',
        tipo:'',
        direccion:{
          lugar:'',
          coords:{
            lat:'',
            lng:''
          }
        }
      }
    ]
  }
  async ngOnInit() {
    // this.coords=await this.iniciarLocalizacion()
    this.itinerario.id_usuario=await this.storage.get('id_usuario');
  }
  async ionViewWillEnter() {
    await this.iniciarLocalizacion()
  }

  cerrar() {
    this.modalController.dismiss(this.itinerario);
  }

  agregarPunto(){

    this.itinerario.puntos.push({
      descripcion: '',
      gasto:'',
      tipo:'',
      direccion:{
        lugar:'',
        coords:{
          lat:'',
          lng:''
        }
      }
    })


  }

  async mapa(lugar,i) {

    // await modal = await this.modalController.create({
    //   component: ModalItinerarioPage
    // });
    // return await modal.present();
    let direc:any;
    const modal = await this.modalController.create({
      component: MapaDireccionPage,
      componentProps: {value:lugar,value2:this.coords}
    });
    // modal.onDidDismiss()
    // .then((data) => {
    //   direc=data
    //   console.log(data)
    // });

    await modal.present();
    direc=await modal.onDidDismiss();
    if (direc.data!=undefined) {
      this.itinerario.puntos[i].direccion.lugar=direc.data.lugar
      this.itinerario.puntos[i].direccion.coords.lat=JSON.parse(direc.data.coords).lat
      this.itinerario.puntos[i].direccion.coords.lng=JSON.parse(direc.data.coords).lng
    }

    console.log(this.itinerario)
  }

  async guardar(){
    // console.log(index,valor,valor2,valor3);
    // console.log(this.itinerario.puntos);
    this.modalController.dismiss(this.itinerario);
  }

  async iniciarLocalizacion(){

    // let coords;
    await this.geolocation.getCurrentPosition().then((resp) => {
      let pos = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
      this.coords.lat=pos.lat
      this.coords.lng=pos.lng
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data)=>{
      console.log(data)
      this.coords.lat=data.coords.latitude
      this.coords.lng=data.coords.longitude
    })

    }).catch((error) => {
      console.log('Error getting location', error);
    });

    return this.coords;
  }





}
