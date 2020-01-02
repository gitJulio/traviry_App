import { Header, WEB_SERVICE } from '../../configuracion/config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ItinerariosService {

  constructor(private http: HttpClient, private storage: Storage) { }

  async getItinerarios() {
    const headers = new HttpHeaders(Header);
    let body = {
      id_usuario:await this.storage.get('id_usuario')
    };
    const url = `${WEB_SERVICE}api/getItinerarios`;
    var resp = await this.http.post(url, body, { headers }).toPromise();
    return resp;
  }

  async insertItinerarios(p_data_itinerario:any) {
    const headers = new HttpHeaders(Header);
    let body = [p_data_itinerario]
    const url = `${WEB_SERVICE}api/insertItinerarios`;
    var resp = await this.http.post(url, body, { headers }).toPromise();
    return resp;
  }
}
