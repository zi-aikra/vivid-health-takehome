import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { BooksController } from './books.controller'
import { BooksService } from './books.service'
import { Book, BookSchema } from './schemas/book.schema'
import { MyJwtModule } from '../jwt/jwt.module'

@Module({
  imports: [MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]), MyJwtModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}