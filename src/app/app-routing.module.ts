import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternaComponent } from './interna/interna.component';
import { CasaComponent } from './casa/casa.component';

const routes: Routes = [
  { path: '', component: CasaComponent},
  { path: 'interna', component: InternaComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
