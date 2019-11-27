import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline-itinerario',
  templateUrl: './timeline-itinerario.component.html',
  styleUrls: ['./timeline-itinerario.component.scss'],
})
export class TimelineItinerarioComponent implements OnInit {

  @Input ('dataPunto') dataPunto;
  puntos_itinerario:any={
    nombre_itinerario:''
  };
  constructor() { }

  ngOnInit() {
    // setTimeout(()=>{
      console.log(this.dataPunto);
    // },500)
    
  }

}
