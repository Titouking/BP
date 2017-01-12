import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { UserService } from '../_services/index';
import { User } from '../_models/user';

@Component({
  moduleId: module.id,
  selector: 'admin-user-detail',
  templateUrl: 'admin-user-detail.component.html',
  //styleUrls: [ 'admin-user-detail.component.css' ]
})

export class AdminUserComponent implements OnInit {
  user: User;
  selectedUser: boolean = true;

    constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.userService.getUserById(+params['id']))
      .subscribe(user => 
      this.user = user);
  }


  goBack(): void {
    this.router.navigate(['../../admin'], {relativeTo: this.route});
  }
}