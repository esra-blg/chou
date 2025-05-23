import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private url = 'http://localhost:3000/reservations';
  
  constructor(private http: HttpClient) {}
  
  getReservations() {
    return this.http.get(this.url);
  }

  addReservation(reservation: any) {
    return this.http.post(this.url, reservation);
  }
}
