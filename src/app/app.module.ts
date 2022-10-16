import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CardlistComponent } from './cardlist/cardlist.component';
import { CarddetailsComponent } from './carddetails/carddetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LogiComponent } from './logi/logi.component';
import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardlistComponent,
    CarddetailsComponent,
    NavbarComponent,
    LogiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
