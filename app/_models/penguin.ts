import { Item } from './item';

export class Penguin {
    id: number;
    userId: number;
    class: string;
    level: number;
    experience: number;
    items: Item[];
    revival: number;
    gold: number;
    HP: number;
    attack: number[];
    stats: { str: number, 
        dex: number, 
        end: number, 
        int: number
    };

    constructor(private _id: number, private _userId: number, private _class: string) {
        this.id = _id;
        this.userId = _userId;
        this.class = _class;
        this.level = 1;
        this.experience = 0;
        this.items = [];
        this.revival = 0;
        this.gold = 500;
        this.HP = 200
        this.attack = [10,11,12,13,14,15,16];
        this.stats = {
            str: 5,
            dex: 5,
            end: 5,
            int: 5
        }
    }

    public levelUp(){
        this.level =+ 1;
        this.experience = 3 * (this.level)^2
    }
}