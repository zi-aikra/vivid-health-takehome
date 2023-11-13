import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'

export type BookDocument = HydratedDocument<Book>

@Schema()
export class Book {
  @Prop({
    required: true,
    min: [1000000000, 'Expected Format: XXXXXXXXXX, got {VALUE}'],
    max: [9999999999999, 'Cannot exceed 13 digits, got {VALUE}']
  })
  isbn: number;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop()
  genre: string;

  @Prop()
  edition: string;

  @Prop()
  coverImageUrl: string;

  @Prop({
    enum: {
      values: ['Hardcover', 'Paperback', 'Digital'], 
      message: "{VALUE} is not a valid binding type. Must be \'Hardcover\', \'Paperback\', or \'Digital\'",
      default: 'Digital'
    }
  })
  bindingType: string;

  @Prop()
  publisher: string;

  @Prop({ default: Date.now() })
  datePublished: Date;

  @Prop({
    min: [1, 'Must be at least 1. Got {VALUE}']
  })
  pages: number;

  @Prop({
    min: [0, 'Must be at least 0. Got {VALUE}']
  })
  listPrice: number;

  @Prop({
    enum: {
      values: ['USD', 'CAD'],
      message: '{VALUE} is invalid. Only USD and CAD are currently supported.'
    }
  })
  listPriceCurrency: string;

  @Prop({ default: 1 })
  quantity: number;

  @Prop({ default: Date.now() })
  dateAdded: Date;

  @Prop({ default: Date.now() })
  updated: Date;
}

export const BookSchema = SchemaFactory.createForClass(Book)