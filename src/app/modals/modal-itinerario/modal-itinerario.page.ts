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
  a:[] = [{"nombre":"1"}]

  contadorDescripcion:any=0;
  puntos:[]=[
    {
      variable:this.contadorDescripcion,
      nombre:'',
      tipo:'',
      gasto:''
    }
  ]
  ngOnInit() {

  }

  cerrar() {
    this.modalController.dismiss();
  }

  agregarPunto(){
    this.contadorDescripcion=this.contadorDescripcion+1;
    this.puntos.push({
      descripcion:this.contadorDescripcion,
      nombre:'a',
      tipo:'a',
      gasto:'a'
    })
    
    console.log(this.puntos);
    
  }

  saluda(){
    // console.log(index,valor,valor2,valor3);   
    console.log(this.puntos);
    
  }





}
