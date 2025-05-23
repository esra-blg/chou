import { Component } from '@angular/core';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../models';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {

  reservations: Reservation[] = [];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe((data: any) => {
      this.reservations = data;
    });
  }

  deleteReservation(id: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette réservation ?')) {
      this.reservationService.deleteReservation(id).subscribe(() => {
        this.reservations = this.reservations.filter(r => r.id !== id);
        alert('Réservation supprimée !');
      });
    }
  }

}
