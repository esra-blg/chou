export interface Trottinette {
    id: number;
    modele: string;
  }
  
  export interface Reservation {
localisation: any;
    id: string; // Changed from number to string
    email: string;
    telephone: string;
    dateDebut: string;
    nbHeures: number;
    idTrottinette: number;
  }
