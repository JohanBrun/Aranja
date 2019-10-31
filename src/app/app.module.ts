import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
//import { ComponentModule } from './components/index';

// Components
import { AppComponent } from './app.component';
import { SombreroComponent } from './components/sombrero/sombrero.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { PonchoComponent } from './components/poncho/poncho.component';
import { InternaComponent } from './components/interna/interna.component';
import { CasaComponent } from './components/casa/casa.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { HombresComponent } from './components/hombres/hombres.component';
import { BookingComponent } from './components/booking/booking.component';
import { VisitasComponent } from './components/visitas/visitas.component';


// ng-bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    SombreroComponent,
    SlideshowComponent,
    PonchoComponent,
    InternaComponent,
    CasaComponent,
    HistoriaComponent,
    HombresComponent,
    BookingComponent,
    VisitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    NgbModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
