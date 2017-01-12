import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router }            from '@angular/router';
import { User } from '../_models/user';
import { Penguin } from '../_models/penguin';
import { UserService } from '../_services/index';

@Component({
  moduleId: module.id,
  selector: 'admin',
  templateUrl: 'admin.component.html',
  styleUrls: [ 'admin.component.css' ]
})

export class AdminComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    penguins: Penguin[] = [];
    selectedUser: boolean = false;
    selectedPenguin: boolean = false;
    private sub: any;  
    private mode: string;

    constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')); 
    }

    ngOnInit(): void {
        ///todo: need to change that
        if (this.route.snapshot.children.length > 0) {
            this.selectedUser = true;
        }
        else{
            this.loadAllUsers();
            this.loadAllPenguins();
        }
        
    }

    private loadAllUsers() {
        this.userService.getAllUsers().subscribe(users => { this.users = users; });
    }

    private loadAllPenguins() {
        this.userService.getAllPenguins().subscribe(penguins => { 
            this.penguins = penguins; });
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    viewUser(userId: number) {
        this.selectedUser = true;
        this.router.navigate(['admin', 'user', userId]);
    }

    viewPenguin(penguinId: number) {
        this.selectedPenguin = true;
        this.router.navigate(['admin', 'penguin', penguinId]);
        //let penguin = this.penguins.find(x => x.id === penguinId);
    }
}