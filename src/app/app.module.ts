import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PrimeNgModule } from './prime-ng.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    HttpClientModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
