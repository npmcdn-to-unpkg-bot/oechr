import { Component } from '@angular/core';
import { Response } from '@angular/http';
import { RouterLink } from '@angular/router-deprecated';

import {
    MapsAPILoader,
    NoOpMapsAPILoader,
    MouseEvent,
    GOOGLE_MAPS_PROVIDERS,
    GOOGLE_MAPS_DIRECTIVES
} from 'angular2-google-maps/core/index';

// Models
import { MapMarker } from './../models/map-marker';

@Component({
    selector: 'my-app',
    directives: [GOOGLE_MAPS_DIRECTIVES],
    templateUrl: '../templates/map.component.html'
})

export class MapComponent {
    // google maps zoom level
    zoom:number = 8;

    // initial center position for the map
    lat:number = 51.673858;
    lng:number = 7.815982;

    constructor() {

    }

    clickedMarker(label:string, index:number) {
        console.log(`clicked the marker: ${label || index}`)
    }
}