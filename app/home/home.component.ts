import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { Penguin } from '../_models/penguin';
import { UserService, PenguinService } from '../_services/index';

@Component({
  moduleId: module.id,
  selector: 'my-home',
  templateUrl: 'home.component.html',
  styleUrls: [ 'home.component.css' ]
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    penguin: Penguin;
    isAdmin: boolean = false;
    lastUpdateTime = null;

    constructor(private userService: UserService, private penguinService: PenguinService, private router: Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser.username === "admin") {
            this.isAdmin = true;
            this.router.navigate(['admin']);
        }
    }

    ngOnInit(): void {
        if (!this.isAdmin) {
            this.loadPenguinForUser(this.currentUser.id);
            this.calculateNumberAttacks(this.currentUser.playersAttacksLeft, this.currentUser.monstersAttacksLeft);
        }
      
    }

    private loadPenguinForUser(userId: number): void{
      this.userService.getPenguinByUserId(userId).subscribe(penguin => { 
          this.penguin = penguin; 
          this.penguinService.penguin = penguin; 
        });
    }

    private calculateNumberAttacks(playersAttacksLeft: number, monstersAttacksLeft: number): void {
        this.lastUpdateTime = this.lastUpdateTime != null ? this.lastUpdateTime : new Date().getTime();
        let currentTime = new Date().getTime();
        if(currentTime - this.lastUpdateTime >= 24*60*60*1000) // number of milliseconds in a day
        {
            // update cycleDay
            this.lastUpdateTime = currentTime;
            this.currentUser.playersAttacksLeft = 8;
            this.currentUser.monstersAttacksLeft = 16;
            // ...
        }else{
            this.currentUser.playersAttacksLeft = this.currentUser.playersAttacksLeft ? playersAttacksLeft : 8
            this.currentUser.monstersAttacksLeft = this.currentUser.monstersAttacksLeft ? monstersAttacksLeft : 16
        }

        
    }
}