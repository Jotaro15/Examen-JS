export class User {
    id: number;
    username: string;
    password: string; // Pas de hash pour cet exemple simple
    borrowedBooks: number[]; // Liste d'IDs des livres empruntés
  }
  