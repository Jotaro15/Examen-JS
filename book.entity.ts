export class Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    rating: number; // Note sur 5, modifiable uniquement après emprunt
    isBorrowed: boolean; // Pour savoir si le livre est emprunté
  }