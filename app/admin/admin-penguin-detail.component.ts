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
        this.getUsername(this.penguin.userId);
        this.penguin["attackRange"] = this.calculatePenguinAttackRange(this.penguin.attack);
    });
  }

    private getUsername(userId: number): void {
      this.userService.getUserById(userId).subscribe(user => this.username = user.username)
    }

    private calculatePenguinAttackRange(attack: number): string {
      return "[" + Math.ceil(attack*0.85) + " - " + Math.ceil(attack*1.25) + "]"
    }


    levelUp(penguin: Penguin){
      penguin = Penguin.levelUp(penguin);
      this.penguin = penguin;
    }

    goBack(): void {
      this.router.navigate(['../../admin'], {relativeTo: this.route});
    }
}