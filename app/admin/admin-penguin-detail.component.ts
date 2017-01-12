import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { UserService } from '../_services/index';
import { Penguin } from '../_models/penguin';

@Component({
  moduleId: module.id,
  selector: 'admin-penguin-detail',
  templateUrl: 'admin-penguin-detail.component.html',
  //styleUrls: [ 'admin-user-detail.component.css' ]
})

export class AdminPenguinComponent implements OnInit {
    penguin: Penguin;
    selectedPenguin: boolean = true;
    username: string;

    constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.userService.getPenguinByUserId(+params['id']))
      .subscribe(penguin => {
        this.penguin = penguin;
        this.getThumbnail(this.penguin);
        this.getUsername(this.penguin.userId);
        this.penguin["attackRange"] = this.calculatePenguinAttackRange(this.penguin.attack);
    });
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

    private calculatePenguinAttackRange(attack: number[]): string {
      return "[" + attack[0] + " - " + attack[attack.length - 1] + "]"
    }


    levelUp(penguin: Penguin){
      //let currentXp = penguin.experience;
      //let currentLvl = penguin.level;
      //let expNeeded = this.getExpNeedForLvlUp(currentLvl, currentXp);
      penguin.levelUp();
    }

    goBack(): void {
      this.router.navigate(['../../admin'], {relativeTo: this.route});
    }

    // getExpNeedForLvlUp(level, experience): number{
      
    //   return 0;
    // }
}