import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }       from './home/home.component';
import { AdminComponent }      from './admin/admin.component';
import { AdminUserComponent }         from './admin/admin-user-detail.component';
import { AdminPenguinComponent }      from './admin/admin-penguin-detail.component';
import { LoginComponent }      from './login/login.component';
import { RegisterComponent }   from './register/register.component';
import { AuthGuard }           from './_guards/auth.guard';
import { ProfileComponent }    from './profile/profile.component';
import { MapComponent }        from './map/map.component';
import { ArenaComponent }      from './arena/arena.component';
//import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent , canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], 
    children: [
      { path: 'user/:id', component: AdminUserComponent },
      { path: 'penguin/:id', component: AdminPenguinComponent }
    ]},
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'map', component: MapComponent, canActivate: [AuthGuard]  },
  { path: 'arena', component: ArenaComponent, canActivate: [AuthGuard]  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
  //{ path: 'heroes',     component: HeroesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}