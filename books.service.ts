import { Injectable } from '@nestjs/common';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
  private books: Book[] = [];
  private idCounter = 1;

  findAll(): Book[] {
    return this.books;
  }

  findById(id: number): Book {
    return this.books.find(book => book.id === id);
  }

  create(book: Partial<Book>): Book {
    const newBook = { id: this.idCounter++, ...book, isBorrowed: false };
    this.books.push(newBook);
    return newBook;
  }

  update(id: number, updateBook: Partial<Book>): Book {
    const book = this.findById(id);
    if (book) {
      Object.assign(book, updateBook);
      return book;
    }
    return null;
  }

  remove(id: number): boolean {
    const bookIndex = this.books.findIndex(book => book.id === id);
    if (bookIndex >= 0) {
      this.books.splice(bookIndex, 1);
      return true;
    }
    return false;
  }
}
