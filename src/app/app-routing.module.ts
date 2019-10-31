import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternaComponent } from './components/interna/interna.component';
import { CasaComponent } from './components/casa/casa.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { HombresComponent } from './components/hombres/hombres.component';
import { BookingComponent } from './components/booking/booking.component';
import { VisitasComponent } from './components/visitas/visitas.component';

const routes: Routes = [
  { path: '', component: CasaComponent},
  { path: 'interna', component: InternaComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'hombres', component: HombresComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'visitas', component: VisitasComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
