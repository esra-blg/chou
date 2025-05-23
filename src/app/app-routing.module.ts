import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrotinetListComponent } from './trotinet-list/trotinet-list.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/trottinettes', pathMatch: 'full' },
  { path: 'trottinettes', component: TrotinetListComponent },
  { path: 'reservations', component: ReservationComponent },
  { path: 'add-reservation/:id', component: ReservationFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
