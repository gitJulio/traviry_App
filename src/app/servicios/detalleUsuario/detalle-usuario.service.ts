import { Header, WEB_SERVICE } from '../../configuracion/config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DetalleUsuarioService {

  constructor(private http: HttpClient, private storage: Storage) { }

  async getDetalleUsuario() {
    const headers = new HttpHeaders(Header);
    let body = {
      id_usuario:await this.storage.get('id_usuario')
    };


    const url = `${WEB_SERVICE}api/getDataUsuario`;
    var resp = await this.http.post(url, body, { headers }).toPromise();
    console.log("*************")
    console.log(resp)
    console.log("*************")
    return resp;
  }
}
