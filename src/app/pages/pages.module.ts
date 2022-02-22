import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AddComponent } from './components/add/add.component';
import {ButtonModule} from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ButtonModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
