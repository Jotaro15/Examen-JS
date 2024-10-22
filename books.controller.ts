import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.booksService.findById(id);
  }

  @Post()
  create(@Body() bookData: Partial<Book>) {
    return this.booksService.create(bookData);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateData: Partial<Book>) {
    return this.booksService.update(id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.booksService.remove(id);
  }
}
