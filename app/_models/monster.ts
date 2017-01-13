import { Item } from './item';

export class Monster {
    HP: number;
    attack: number;
    name: string;
    id: number;
    reward: {
        exp: number,
        gold: number,
        item: Item[],
    };
    photo: any;
    location: number;
    

     /**
      *
      */
     constructor(private mapId ) {
         this.location = mapId;
     }
}