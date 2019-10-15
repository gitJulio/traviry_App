import { Component, OnInit } from '@angular/core';
import {DetalleUsuarioService} from '../../servicios/detalleUsuario/detalle-usuario.service'
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
  constructor(public detUs:DetalleUsuarioService) { }

  async ngOnInit() {
    this.dataUsuario=await this.detUs.getDetalleUsuario();
    console.log(this.dataUsuario.itinerario.puntos_itinerario);
    
  }

}
