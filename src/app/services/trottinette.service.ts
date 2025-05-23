import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrottinetteService {

  private url = 'http://localhost:3000/trottinettes';

  constructor(private http: HttpClient) {}

  getTrottinettes() {
    return this.http.get(this.url);
  }

}
