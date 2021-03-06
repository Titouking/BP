import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Classes } from '../_models/classes'
import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    selector: 'my-register',
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css']
})

export class RegisterComponent {
    model: any = {};
    public pclasses = [];
    class:string;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { 
            ///todo: move constructor to onInit?
            for (var prop in Classes) {
                if (Classes.hasOwnProperty(prop)) {
                    this.pclasses.push(Classes[prop]);
                }
            }

        }

    register() {
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                });
    }
}