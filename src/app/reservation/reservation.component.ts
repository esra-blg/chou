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

}
