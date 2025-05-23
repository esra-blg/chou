export interface Trottinette {
    id: number;
    modele: string;
  }
  
  export interface Reservation {
    id: number;
    email: string;
    telephone: string;
    dateDebut: string;
    nbHeures: number;
    idTrottinette: number;
  }
  