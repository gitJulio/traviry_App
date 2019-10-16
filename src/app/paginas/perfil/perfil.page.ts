import { Component, OnInit } from '@angular/core';
import {DetalleUsuarioService} from '../../servicios/detalleUsuario/detalle-usuario.service'
import {ListaItinerariosPage} from '../../modals/lista-itinerarios/lista-itinerarios.page'
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  dataUsuario:any={
    nombre:'',
    apellido:'',
    id_pais:'',
    profesion:'',
    conoceme:'',
    cant_itinerarios:'',
    itinerario:{
      id_itinerario:'',
      nombre_itinerario:'',
      puntos_itinerario:[
        {
          id_punto:'',
          id_itinerario:'',
          descripcion:'',
          costo:'',
          id_estado:'',
          longitud:'',
          latitud:'',
          fecha_actualizacion:'',
          tarea_a_realizar:'',
          fecha_a_realizar:''
        }
      ]
    }
  };
  constructor(
              public detUs:DetalleUsuarioService,
              public modalController:ModalController
             ){ }

  async ngOnInit() {
    this.dataUsuario=await this.detUs.getDetalleUsuario();
  }

  
  async abrirListaItinerario() {
    // await modal = await this.modalController.create({
    //   component: ModalItinerarioPage
    // });
    // return await modal.present();
    const modal = await this.modalController.create({
      component: ListaItinerariosPage,
      componentProps: {}
    });
    modal.onDidDismiss()
    .then((data) => {
      console.log(data);
      
    });
    await modal.present();
  }

}
