import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { SombreroComponent } from './sombrero/sombrero.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PonchoComponent } from './poncho/poncho.component';
import { InternaComponent } from './interna/interna.component';

// ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { CasaComponent } from './casa/casa.component';



@NgModule({
  declarations: [
    AppComponent,
    SombreroComponent,
    SlideshowComponent,
    PonchoComponent,
    InternaComponent,
    CasaComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
