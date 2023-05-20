import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NaturalObservationsComponent } from "./natural-observations/natural-observations.component";
import {SenderasComponent} from "./senderas/senderas.component";
import {SideNavComponent} from "./side-nav/side-nav.component";
import {ObservationFormComponent} from "./natural-observations/observation-form/observation-form.component";

const routes: Routes = [
  { path: 'natural-observations', component: NaturalObservationsComponent },
  { path: 'natural-observations/:observationId/edit', component: ObservationFormComponent },
  { path: 'natural-observations/new', component: ObservationFormComponent },
  { path: 'senderas', component: SenderasComponent },
  { path: 'foobar', component: SideNavComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
