import { Controller, Post, Param } from '@nestjs/common';
import { BorrowsService } from './borrows.service';

@Controller('borrows')
export class BorrowsController {
  constructor(private readonly borrowsService: BorrowsService) {}

  @Post(':bookId/borrow/:userId')
  borrowBook(@Param('bookId') bookId: number, @Param('userId') userId: number) {
    return this.borrowsService.borrowBook(bookId, userId);
  }

  @Post(':bookId/return/:userId')
  returnBook(@Param('bookId') bookId: number, @Param('userId') userId: number) {
    return this.borrowsService.returnBook(bookId, userId);
  }
}
