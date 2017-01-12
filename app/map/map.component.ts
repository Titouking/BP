import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { Monster } from '../_models/monster';

@Component({
  moduleId: module.id,
  selector: 'my-map',
  templateUrl: 'map.component.html',
  styleUrls: [ 'map.component.css' ]
})

export class MapComponent implements OnInit {
    
    mapRegions;
    monster: Monster;

    ngOnInit(): void {

      this.mapRegions = [{
      "shape": "poly",
      "type": "Crique des otaries",
      "coords": "450,506,386,550,340,627,399,644,472,623,493,550",
      "id": 1
    }, {
       "shape": "rect",
        "type": "Village inuit",
        "coords": "172,657,73,573",
        "id": 2
      }, {
        "shape": "poly",
        "type": "Foret sauvage",
        "coords": "235,513,304,586,249,645,164,624,133,552,165,516",
        "id": 3
      }, {
         "shape": "circle",
        "type": "Plaineaux cariboux",
        "coords": "322,540,63",
        "id": 4
      }, {
         "shape": "rect",
        "type": "Rivage des morses",
        "coords": "125,647,386,719",
        "id": 5
      }, {
        "shape": "poly",
        "type": "Montagnes du pouvoir",
        "coords": "161,382,204,447,170,517,92,562,40,566,50,524,133,483",
        "id": 6
    }]
    }

    regionClicked(id: number, title: string){
      console.log('Map id: ' + id + ' - ' + title + ' clicked');
      this.monster = this.generateMonster(id);
    }

    generateMonster(mapId: number) : Monster{
      let monster = new Monster(mapId);
      return monster;
    }
}