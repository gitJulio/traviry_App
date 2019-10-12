import { Component, OnInit,Input,ViewChild } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-itinerario',
  templateUrl: './modal-itinerario.page.html',
  styleUrls: ['./modal-itinerario.page.scss'],
})
export class ModalItinerarioPage implements OnInit {

  constructor(public modalController:ModalController) { }

   a:any='';

  public anArray:any=[];


  contadorDescripcion:any=0;
  contadorGasto:any=0;
  contadorTipo:any=0;
  itinerario:any={
    nombre:'',
    puntos:[
      {
        descripcion:'',
        gasto:'',
        tipo:''
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

  saluda(){
    // console.log(index,valor,valor2,valor3);   
    // console.log(this.itinerario.puntos);
    
  }





}
