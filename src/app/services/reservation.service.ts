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
    // Ensure the id is a string
    if (reservation.id) {
      reservation.id = String(reservation.id);
    }
    return this.http.post(this.url, reservation);
  }

  getReservationById(id: string) { // Changed parameter type to string
    return this.http.get(`${this.url}/${id}`);
  }

  updateReservation(id: string, reservation: any) { // Changed parameter type to string
    return this.http.put(`${this.url}/${id}`, reservation);
  }
  
  deleteReservation(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
