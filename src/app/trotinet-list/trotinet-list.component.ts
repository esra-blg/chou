import { Component } from '@angular/core';
import { Trottinette } from '../models';
import { TrottinetteService } from '../services/trottinette.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-trotinet-list',
  templateUrl: './trotinet-list.component.html',
  styleUrls: ['./trotinet-list.component.css']
})
export class TrotinetListComponent {

  trottinettes: Trottinette[] = [];

  constructor(private trottinetteService: TrottinetteService, private router: Router) {}

  ngOnInit(): void {
    this.trottinetteService.getTrottinettes().subscribe((data: any) => {
      this.trottinettes = data;
    });
  }

  reserver(id: number) {
    this.router.navigate(['/add-reservation', id]);
  }
}
