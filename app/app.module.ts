import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { MaterialModule } from '@angular/material';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }       from './app.component';

import { AlertComponent }    from './_directives/alert.component';
import { AuthGuard }         from './_guards/auth.guard';
import { AlertService, AuthenticationService, UserService, PenguinService } from './_services/index';

import { HomeComponent }      from './home/home.component';
import { LoginComponent }      from './login/login.component';
import { AdminComponent }      from './admin/admin.component';
import { AdminUserComponent }      from './admin/admin-user-detail.component';
import { AdminPenguinComponent }      from './admin/admin-penguin-detail.component';
import { RegisterComponent }      from './register/register.component';
import { ProfileComponent }   from './profile/profile.component';
import { MapComponent }       from './map/map.component';
import { ArenaComponent }      from './arena/arena.component';

import { AppRoutingModule }     from './app-routing.module';
@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpModule, MaterialModule.forRoot() ],
  declarations: [ AppComponent, HomeComponent, LoginComponent, AdminComponent, AdminUserComponent, AdminPenguinComponent, RegisterComponent, AlertComponent, ProfileComponent, MapComponent, ArenaComponent ],
  providers: [ AuthGuard, AlertService, AuthenticationService, UserService, PenguinService, fakeBackendProvider, MockBackend, BaseRequestOptions ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }