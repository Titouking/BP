import { Item } from './item';

export class Penguin {
    id: number;
    userId: number;
    class: string;
    avatar: string;
    level: number;
    experience: number;
    items: Item[];
    revival: number;
    gold: number;
    bonusStats: number;
    stats: { 
        str: number, 
        dex: number, 
        end: number, 
        int: number
    };
    HP: number;
    attack: number;
    armor: number;

    constructor(private _id: number, private _userId: number, private _class: string) {
        this.id = _id;
        this.userId = _userId;
        this.class = _class;
        this.level = 1;
        this.bonusStats = 0;
        this.avatar = this.getImage(_class, this.level);
        this.experience = 0;
        this.items = [];
        this.revival = 0;
        this.gold = 500;
        this.stats = this.getStartingStats(_class);
        this.HP = this.calculateHP(this.stats.end);
        this.attack = this.calculateAttack(_class, this.stats, this.items);
        this.armor = this.calculateArmor(this.stats.dex);
    }

    public static levelUp(penguin: Penguin){
         penguin.level += 1;
         let x = penguin.level;
         penguin.experience = (46 * x^2) + (58 * x) + 251;
         penguin.bonusStats += 5;
         switch (penguin.class) {
            case "warrior":
                penguin.stats.str += 4;
                penguin.stats.dex += 1;
                penguin.stats.end += 2;
                penguin.stats.int += 1;
                break;

            case "tank":
                penguin.stats.str = penguin.stats.str + 2;
                penguin.stats.dex = penguin.stats.dex + 1;
                penguin.stats.end = penguin.stats.end + 4;
                penguin.stats.int = penguin.stats.int + 1;
                break;    

            case "archer":
                penguin.stats.str = penguin.stats.str + 2;
                penguin.stats.dex = penguin.stats.dex + 4;
                penguin.stats.end = penguin.stats.end + 1;
                penguin.stats.int = penguin.stats.int + 1;
                break;

            case "mage":
                penguin.stats.str = penguin.stats.str + 2;
                penguin.stats.dex = penguin.stats.dex + 1;
                penguin.stats.end = penguin.stats.end + 1;
                penguin.stats.int = penguin.stats.int + 4;
                break;

            case "battle mage":
                penguin.stats.str = penguin.stats.str + 3;
                penguin.stats.dex = penguin.stats.dex + 1;
                penguin.stats.end = penguin.stats.end + 1;
                penguin.stats.int = penguin.stats.int + 3;
                break;

            default:
            break;
        }
         return penguin;
    }

    private getImage(penguinClass: string, penguinLevel: number): string{
        let imagePath: string;
        switch (penguinClass) {
            case "warrior":
            imagePath = (penguinLevel < 40) ? "../images/avatar/war_0.jpg" : (penguinLevel < 80) ? "../images/avatar/war_1.jpg" : (penguinLevel < 120) ? "../images/avatar/war_2.jpg" : (penguinLevel < 160) ? "../images/avatar/war_3.jpg" : "../images/avatar/war_4.jpg"
            break;
            case "tank":
            imagePath = (penguinLevel < 40) ? "../images/avatar/tank_0.jpg" : (penguinLevel < 80) ? "../images/avatar/tank_1.jpg" : (penguinLevel < 120) ? "../images/avatar/tank_2.jpg" : (penguinLevel < 160) ? "../images/avatar/tank_3.jpg" : "../images/avatar/tank_4.jpg"
            break;
            case "archer":
            imagePath = (penguinLevel < 40) ? "../images/avatar/arch_0.jpg" : (penguinLevel < 80) ? "../images/avatar/arch_1.jpg" : (penguinLevel < 120) ? "../images/avatar/arch_2.jpg" : (penguinLevel < 160) ? "../images/avatar/arch_3.jpg" : "../images/avatar/arch_4.jpg"
            break;
            case "mage":
            imagePath = (penguinLevel < 40) ? "../images/avatar/mage_0.jpg" : (penguinLevel < 80) ? "../images/avatar/mage_1.jpg" : (penguinLevel < 120) ? "../images/avatar/mage_2.jpg" : (penguinLevel < 160) ? "../images/avatar/mage_3.jpg" : "../images/avatar/mage_4.jpg"
            break;
            case "battle mage":
            imagePath = (penguinLevel < 40) ? "../images/avatar/mage_0.jpg" : (penguinLevel < 80) ? "../images/avatar/warmag_1.jpg" : (penguinLevel < 120) ? "../images/avatar/warmag_2.jpg" : (penguinLevel < 160) ? "../images/avatar/warmag_3.jpg" : "../images/avatar/warmag_4.jpg"
            break;
            default:
            break; 
        }
      return imagePath;
    }

    private getStartingStats(penguinClass: string): any{
        let stats = {};
        switch (penguinClass) {
            case "warrior":
            stats = { str:11, dex:5, end:7, int:2 } 
            break;
            case "tank":
            stats = { str:7, dex:6, end:11, int:1 } 
            break;
            case "archer":
            stats = { str:8, dex:12, end:2, int:3 } 
            break;
            case "mage": 
            stats = { str:6, dex:3, end:3, int:13 }
            break;
            case "battle mage":
            stats = { str:8, dex:3, end:6, int:8 }
            break;
            default:
            break; 
        }
        return stats
    }

    private calculateHP(endurance: any): number{
        return endurance * 20;
    }

    private calculateAttack(penguinClass: string, penguinStats: any, penguinItems: Item[]): number {
        let attack: number;
        switch (penguinClass) {
            case "warrior":
            attack = Math.ceil(penguinStats.str * 3.8);
            break;
            case "tank":
            attack = penguinStats.str * 1 + penguinStats.end * 2;
            break;
            case "archer":
            attack = penguinStats.str * 2 + penguinStats.dex * 3;
            break;
            case "mage":
            attack = penguinStats.str * 2 + penguinStats.int * 3;
            break;
            case "battle mage":
            attack = penguinStats.str * 2.5 + penguinStats.int * 2.5;
            break;
            default:
            break; 
        }
        return attack;
    }

    private calculateArmor(dexterity: any): number {
        return dexterity * 2;
    }
}