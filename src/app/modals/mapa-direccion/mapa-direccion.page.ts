import { Component, OnInit,ViewChild, ElementRef,NgZone, ɵConsole,Input  } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NavController, ModalController, NavParams } from '@ionic/angular';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

declare var google;

@Component({
  selector: 'app-mapa-direccion',
  templateUrl: './mapa-direccion.page.html',
  styleUrls: ['./mapa-direccion.page.scss'],
})
export class MapaDireccionPage implements OnInit {


  @Input("value") value;
  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any;
  GoogleAutocomplete = new google.maps.places.AutocompleteService();
  autocomplete = { input: '' };
  autocompleteItems = [];
  geocoder = new google.maps.Geocoder;
  markers = [];
  lat:number;
  lng:number;
  lugar:any={
        coords:'',
        lugar:''
  };
  constructor(
                public geolocation:Geolocation,
                public nav:NavController,
                public zone:NgZone,
                public modalController:ModalController,
                private navParams: NavParams
  ) { }

  async ionViewWillEnter() {
    let myValue = this.navParams.get('value');
    let coords =this.navParams.get('value2');
    if (myValue.coords.lat==="") {
      this.lat=coords.lat
      this.lng=coords.lng
    }else{
      this.lat=myValue.coords.lat
      this.lng=myValue.coords.lng
    }
  }

  async ngOnInit() {
    // this.iniciarLocalizacion()

  }
  // ionViewDidLoad(){
  //   this.loadMap();
  // }
  ionViewDidEnter(){
    //Set latitude and longitude of some place
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: { lat:this.lat, lng:this.lng },
      zoom: 15
    });
  }
  loadMap(){

    let latLng = new google.maps.LatLng(this.lat, this.lng);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }


  updateSearchResults(){

    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },(predictions, status) => {
      this.autocompleteItems = [];
      this.zone.run(() => {
        predictions.forEach((prediction) => {
          this.autocompleteItems.push(prediction);
        });
      });
    });
  }

  async selectSearchResult(item){

    // this.clearMarkers();

    this.autocompleteItems = [];


     this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {


      if(status === 'OK' && results[0]){

        let position = {
            lat: results[0].geometry.location.lat,
            lng: results[0].geometry.location.lng
        };
        // console.log("***************");
        // console.log(results[0].geometry.location);
        // console.log("***************");

        let marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: this.map,
        });

        console.log(results[0].formatted_address)
        this.lugar.lugar=results[0].formatted_address
        this.lugar.coords=JSON.stringify(marker.position);





        this.markers.push(marker);
        this.map.setCenter(results[0].geometry.location);
      }
    })
    // this.tryGeolocation()
  }

  async locate( position){
    console.log(await position);

  }
  tryGeolocation(){
    this.clearMarkers();
    this.geolocation.getCurrentPosition().then((resp) => {

      let pos = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };

      let marker = new google.maps.Marker({
        position: pos,
        map: this.map,
        title: 'I am here!'
      });
      this.markers.push(marker);
      this.map.setCenter(pos);
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  async iniciarLocalizacion(){

    let coords;
    await this.geolocation.getCurrentPosition().then((resp) => {
      let pos = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
      coords=pos
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data)=>{
    })

    }).catch((error) => {
      console.log('Error getting location', error);
    });

    return coords;
  }

  cerrar() {
    this.modalController.dismiss();
  }
  clearMarkers(){
    this.markers=[];

  }

  guardarDireccion(){
    this.modalController.dismiss(this.lugar)
  }

}
