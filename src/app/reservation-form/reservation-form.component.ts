import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']

})
export class ReservationFormComponent implements OnInit {
  form: any;
  idTrottinette!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.idTrottinette = Number(this.route.snapshot.paramMap.get('id'));
    this.form = this.fb.group({
      id: ['', Validators.required],
      idTrottinette: [this.idTrottinette, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      dateDebut: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
      nbHeures: [1, [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.reservationService.addReservation(this.form.value).subscribe(() => {
        alert('Réservation ajoutée !');
        this.router.navigate(['/reservations']);
      });
    }
  }
}
