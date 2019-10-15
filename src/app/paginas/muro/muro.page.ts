import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-muro',
  templateUrl: './muro.page.html',
  styleUrls: ['./muro.page.scss'],
})
export class MuroPage implements OnInit {

  constructor(public storage:Storage) { }

  async ngOnInit() {
    console.log(await this.storage.get("id_usuario"));
    
  }

}
