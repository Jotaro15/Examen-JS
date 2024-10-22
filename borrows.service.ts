import { Injectable } from '@nestjs/common';
import { Borrow } from './borrow.entity';

@Injectable()
export class BorrowsService {
  private borrows: Borrow[] = [];
  private idCounter = 1;

  borrowBook(bookId: number, userId: number): Borrow {
    const newBorrow = { id: this.idCounter++, bookId, userId, borrowDate: new Date() };
    this.borrows.push(newBorrow);
    return newBorrow;
  }

  returnBook(bookId: number, userId: number): Borrow {
    const borrow = this.borrows.find(b => b.bookId === bookId && b.userId === userId && !b.returnDate);
    if (borrow) {
      borrow.returnDate = new Date();
      return borrow;
    }
    return null;
  }

  findBorrowsByUser(userId: number): Borrow[] {
    return this.borrows.filter(b => b.userId === userId);
  }

  isBookBorrowed(bookId: number): boolean {
    return this.borrows.some(b => b.bookId === bookId && !b.returnDate);
  }
}
