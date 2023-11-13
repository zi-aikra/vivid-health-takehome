import { Response, HttpStatus, Body, Controller, Delete, Get, Param, Query, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './schemas/book.schema';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) { }

  @Get('/?page=:page&limit=:limit&sortBy=:sortBy')
  async getPage(@Response() resp, @Query() page: number, limit: number, sortBy: string): Promise<Book[]> {
    try {
      const books = await this.booksService.getPage(page, limit, sortBy);
      if (books.length === 0) {
        return resp.status(HttpStatus.NOT_FOUND).json({
          message: 'No Books Available'
        });
      } else {
        return resp.status(HttpStatus.OK).json({
          books
        });
      }
    } catch (error) {
      return resp.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  }

  @Get('/search')
  async searchBook(@Response() resp, @Query('search') search: string): Promise<Book[]> {
    try {
      const books = await this.booksService.serachBook(search);
      if (books.length === 0) {
        return resp.status(HttpStatus.NOT_FOUND).json({
          message: 'No Books Available'
        });
      } else {
        return resp.status(HttpStatus.OK).json({
          books
        });
      }
    } catch (error) {
      return resp.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  }

  @Get()
  async findAll(@Response() resp): Promise<Book[]> {
    try {
      const books = await this.booksService.findAll();
      if (books.length === 0) {
        return resp.status(HttpStatus.NOT_FOUND).json({
          message: 'No Books Available'
        });
      } else {
        return resp.status(HttpStatus.OK).json({
          books
        });
      }
    } catch (error) {
      return resp.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  }

  @Get(':id')
  async findOne(@Response() resp, @Param('id') id: number): Promise<Book | undefined> {
    try{
      const book = await this.booksService.findOne(id);
      if (!book) {
        return resp.status(HttpStatus.NOT_FOUND).json({
          message: 'Book Not Found'
        });
      } 
      else {
        return resp.status(HttpStatus.OK).json({
          book
        });
      }
    } catch (error) {
      return resp.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  }

  @UseGuards(AuthGuard)
  @Post('/add')
  async create(@Response() resp, @Body() createBookDto: CreateBookDto) {
    try {
      const addBook = await this.booksService.create(createBookDto);
      return resp.status(HttpStatus.CREATED).json({
        message: 'Book Added Successfully', addBook
      });
    } catch (error) {
      return resp.status(HttpStatus.UNAUTHORIZED).json(error);
    }
  }

  @UseGuards(AuthGuard)
  @Put('/edit/:id')
  async update(@Response() resp, @Param('id') id: number, @Body() book: Book): Promise<Book | undefined> {
    try{
      const findBook = await this.booksService.findOne(id);
      if (!findBook) {
        return resp.status(HttpStatus.NOT_FOUND).json({
          message: 'Book Not Found'
        });
      }
      else {
        const updateBook = await this.booksService.update(id, book);
        return resp.status(HttpStatus.OK).json({
          message: 'Book Updated Successfully', updateBook
        });
      }
    } catch (error) {
      return resp.status(HttpStatus.UNAUTHORIZED).json(error);
    }
  }

  @UseGuards(AuthGuard)
  @Delete('/delete/:id')
  async remove(@Response() resp, @Param('id') id: number): Promise<void> {
    try{
      const findBook = await this.booksService.findOne(id);
      if (!findBook) {
        return resp.status(HttpStatus.NOT_FOUND).json({
          message: 'Book Not Found'
        });
      }
      else {
        const deleteBook = await this.booksService.remove(id);
        return resp.status(HttpStatus.OK).json({
          message: 'Book Deleted Successfully'
        });
      }
    } catch (error) {
      return resp.status(HttpStatus.UNAUTHORIZED).json(error);
    }
  }
}
