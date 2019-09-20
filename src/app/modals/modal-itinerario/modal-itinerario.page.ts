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
  puntos:[]=[
    {
      descripcion:this.contadorDescripcion,
      gasto:this.contadorGasto,
      gasto:this.contadorTipo,
      tipo:''
    }
  ]
  ngOnInit() {

  }

  cerrar() {
    this.modalController.dismiss();
  }

  agregarPunto(){
    this.contadorDescripcion=this.contadorDescripcion+1;
    this.contadorGasto=this.contadorGasto+1;
    this.contadorTipo=this.contadorTipo+1;
    this.puntos.push({
      descripcion:this.contadorDescripcion,
      gasto:this.contadorGasto,
      tipo:this.contadorTipo,
      gasto:'a'
    })
    
    console.log(this.puntos);
    
  }

  saluda(){
    // console.log(index,valor,valor2,valor3);   
    console.log(this.puntos);
    
  }





}
