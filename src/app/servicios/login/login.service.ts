import { Header, WEB_SERVICE } from '../../configuracion/config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private storage: Storage) { }

  async login(correo: any, password: any) {
    const headers = new HttpHeaders(Header);
    let body = {
      correo: correo,
      password: password
    };
    const url = `${WEB_SERVICE}api/login`;
    var resp = await this.http.post(url, body, { headers }).toPromise();
    return resp;
  }
}
