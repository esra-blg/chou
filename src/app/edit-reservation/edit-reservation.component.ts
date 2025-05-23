import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-edit-reservation',
  templateUrl: './edit-reservation.component.html',
})
export class EditReservationComponent implements OnInit {
  form!: FormGroup;
  id!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private reservationService: ReservationService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!; // Already a string

    this.form = this.fb.group({
      id: [this.id], // No change needed here
      idTrottinette: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      dateDebut: ['', Validators.required],
      nbHeures: [1, [Validators.required, Validators.min(1)]],
    });

    this.reservationService.getReservationById(this.id).subscribe({
      next: (res: any) => {
        if (res) {
          this.form.patchValue(res);
        } else {
          alert("Réservation introuvable !");
          this.router.navigate(['/reservations']);
        }
      },
      error: () => {
        alert("Erreur lors du chargement de la réservation.");
        this.router.navigate(['/reservations']);
      }
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.reservationService.updateReservation(this.id, this.form.value).subscribe({
        next: () => {
          alert('Réservation modifiée !');
          this.router.navigate(['/reservations']);
        },
        error: () => {
          alert("Erreur lors de la mise à jour de la réservation.");
        }
      });
    } else {
      alert('Formulaire invalide !');
    }
  }
}
