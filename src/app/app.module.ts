import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './Angular-material/app-material.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { logInReducer } from './store/login/login.Reducer';
import { loggedInEffects } from './store/login/login.Effects';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Home/home/home.component';
import { AppEffect } from './Common/App.Effects';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule,
    StoreModule.forRoot({logInPage:logInReducer}),
    EffectsModule.forRoot([loggedInEffects,AppEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
