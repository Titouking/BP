import { Component, OnInit } from '@angular/core';
import { Penguin } from '../_models/penguin';
import { UserService, PenguinService } from '../_services/index';

@Component({
  moduleId: module.id,
  selector: 'my-profile',
  templateUrl: 'profile.component.html',
  styleUrls: [ 'profile.component.css' ]
})

export class ProfileComponent implements OnInit {
    penguin: Penguin;
    username: string;
    constructor(private penguinService: PenguinService, private userService: UserService) {

    }

    ngOnInit(): void {
      this.penguin = this.penguinService.penguin;
      if (this.penguin) {
        this.getThumbnail(this.penguin);
        this.getUsername(this.penguin.userId);
        this.penguin["attackRange"] = this.calculatePenguinAttackRange(this.penguin.attack);
      }
      
    }

    private getThumbnail(penguin: Penguin){
      switch (penguin.class) {
        case "warrior":
          penguin["image_path"] = "../images/avatar/war_0.jpg"
          break;
        case "archer":
          penguin["image_path"] = "../images/avatar/arch_0.jpg"
          break;
        case "mage":
          penguin["image_path"] = "../images/avatar/mage_0.jpg"
          break;
        case "battle mage":
          penguin["image_path"] = "../images/avatar/warmag_0.jpg"
          break;
        default:
          break;
      }
    }

    private getUsername(userId: number): void {
      this.userService.getUserById(userId).subscribe(user => this.username = user.username)
    }

    private calculatePenguinAttackRange(attack: number): string {
      return "[" + Math.ceil(attack*0.85) + " - " + Math.ceil(attack*1.25) + "]"
    }
}