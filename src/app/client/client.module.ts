import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { MainComponent } from './main.component';
import { GalleryComponent } from './gallery/gallery.component';


@NgModule({
  declarations: [MainComponent, GalleryComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
