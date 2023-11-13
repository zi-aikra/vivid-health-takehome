import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) { }

  async getPage(page: number, limit: number, sortBy: string): Promise<Book[]> {
    if (sortBy) {
      return this.bookModel.find().sort(sortBy).skip(page * limit).limit(limit).exec();
    }
    else {
      return this.bookModel.find().skip(page * limit).limit(limit).exec();
    }
  }

  async serachBook(search: string): Promise<Book[]> {
    return this.bookModel.find({ $text: { $search: search } }).exec();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findOne(id: number): Promise<Book> {
    return this.bookModel.findById(id).exec();
  }

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }

  async update(id: number, book: Book): Promise<Book> {
    return this.bookModel.findByIdAndUpdate(id, book, { new: true }).exec();
  }

  async remove(id: number): Promise<void> {
    await this.bookModel.findByIdAndDelete(id).exec();
  }
}