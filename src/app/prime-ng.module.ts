import {BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    SidebarModule,
    ConfirmDialogModule,
  ],
  providers: []
})
export class PrimeNgModule { }

