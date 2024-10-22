export class Borrow {
    id: number;
    bookId: number;
    userId: number;
    borrowDate: Date;
    returnDate?: Date; // Optionnel si le livre n'a pas encore été retourné
  }
  