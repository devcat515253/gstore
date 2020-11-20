import { NgModule } from '@angular/core';

import { ClientRoutingModule } from './client-routing.module';
import { MainComponent } from './main.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MainComponent, GalleryComponent],
  imports: [
    SharedModule,
    ClientRoutingModule
  ]
})
export class ClientModule {
}
