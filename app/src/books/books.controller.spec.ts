import { Test, TestingModule } from '@nestjs/testing';
import { CreateBookDto } from './dto/create-book.dto';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import mongoose from 'mongoose';

describe('BooksController', () => {
    let booksController: BooksController;
    let booksService: BooksService;
    let response: any = {
        status: function (code: number) { return this; },
        json: function (data: any) { return data; }
    };
    const TheGreatGatsby_1925jacket: CreateBookDto = {
        _id: '654baad90f96782212368f4c',
        isbn: 9781640322790,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Novel',
        edition: '1st',
        coverImageUrl: 'https://www.bookcoverart.com/TheGreatGatsby_1925jacket.jpeg',
        bindingType: 'Paperback',
        publisher: 'Charles Scribner\'s Sons',
        datePublished: new Date('April 10, 1925'),
        pages: 218,
        listPrice: 2.00,
        listPriceCurrency: 'USD',
        quantity: 1,
        dateAdded: new Date('Nov. 8, 2023'),
        updated: new Date('Nov. 8, 2023')
    };
    const TheGreatGatsby_CADPrice: CreateBookDto = {
        _id: '654baad90f96782212368f4c',
        isbn: 9781640322790,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        genre: 'Novel',
        edition: '1st',
        coverImageUrl: 'https://www.bookcoverart.com/TheGreatGatsby_1926jacket.jpeg',
        bindingType: 'Paperback',
        publisher: 'Charles Scribner\'s Sons',
        datePublished: new Date('April 10, 1926'),
        pages: 218,
        listPrice: 3.50,
        listPriceCurrency: 'CAD',
        quantity: 1,
        dateAdded: new Date('Nov. 8, 2023'),
        updated: new Date('Nov. 8, 2023')
    };
    const TheRaven: CreateBookDto = {
        _id: '654baff00f96782212368f4e',
        isbn: 9780963113535,
        title: 'The Raven',
        author: 'Edgar Allan Poe',
        genre: 'Poem',
        edition: '1st',
        coverImageUrl: 'https://www.bookcoverart.com/The_Raven_by_Edgar_Allan_Poe.jpg',
        bindingType: 'Paperback',
        publisher: 'The American Review',  
        datePublished: new Date('January 29, 1845'),
        pages: 108,
        listPrice: 0.25,
        listPriceCurrency: 'USD',
        quantity: 5,
        dateAdded: new Date('Nov. 8, 2023'),
        updated: new Date('Nov. 8, 2023')
    };
    const TheLordOfTheRings: CreateBookDto = {
        _id: '654bba0c7ce4314c55fa4b50',
        isbn: 9780618645616,
        title: 'The Lord of the Rings',
        author: 'J. R. R. Tolkien',
        genre: 'Fantasy',
        edition: '50th Anniversary, One Volume',
        coverImageUrl: 'https://www.bookcoverart.com/The_Lord_of_the_Rings_1954_cover.jpg',
        bindingType: 'Hardcover',
        publisher: 'George Allen & Unwin',
        datePublished: new Date('July 29, 1954'),
        pages: 1216,
        listPrice: 1.50,
        listPriceCurrency: 'USD',
        quantity: 10,
        dateAdded: new Date('Nov. 8, 2023'),
        updated: new Date('Nov. 8, 2023')
    };
    const ASongOfFireAndIce: CreateBookDto = {
        _id: '654be2175bf191782b54f166',
        isbn: 9783030542566,
        title: 'The Algorithm Design Manual',
        author: 'Steven S. Skiena',
        genre: 'Computer Science',
        edition: '3rd',
        coverImageUrl: 'https://media.springernature.com/full/springer-static/cover-hires/book/978-3-030-54256-6',
        bindingType: 'Digital',
        publisher: 'Springer',
        datePublished: new Date('April 5, 2020'),
        pages: 817,
        listPrice: 49.99,
        listPriceCurrency: 'USD',
        quantity: 100,
        dateAdded: new Date('Nov. 8, 2023'),
        updated: new Date('Nov. 8, 2023')
    };

    beforeEach(async () => {
        const moduleRef: TestingModule = await Test.createTestingModule({
            controllers: [BooksController],
            providers: [BooksService],
        }).compile();

        booksService = moduleRef.get<BooksService>(BooksService);
        booksController = moduleRef.get<BooksController>(BooksController);
    });

    describe('getPage', () => {
        it('should return an array of books, for a given page', async () => {
            const result: CreateBookDto[] = [TheGreatGatsby_1925jacket, TheRaven, TheLordOfTheRings, ASongOfFireAndIce];
            jest.spyOn(booksService, 'getPage').mockImplementation(async () => result);
            expect(await booksController.getPage(response, 0, 10, '')).toBe(result);
        });
    });

    describe('findOne', () => {
        it('should return a book', async () => {
            jest.spyOn(booksService, 'findOne').mockImplementation(async () => TheGreatGatsby_1925jacket);
            expect(await booksController.findOne(response, 9781640322790)).toBe(TheGreatGatsby_1925jacket);
        });
    });

    describe('create', () => {
        it('should create a book', async () => {
            jest.spyOn(booksService, 'create').mockImplementation(async () => TheGreatGatsby_1925jacket);
            expect(await booksController.create(response, TheGreatGatsby_1925jacket)).toBe(TheGreatGatsby_1925jacket);
        });
    });

    describe('update', () => {
        it('should update a book', async () => {
            jest.spyOn(booksService, 'update').mockImplementation(async () => TheGreatGatsby_CADPrice);
            expect(await booksController.update(response, 9781640322790, TheGreatGatsby_CADPrice)).toBe(TheGreatGatsby_CADPrice);
        });
    });

    describe('remove', () => {
        it('should remove a book', async () => {
            jest.spyOn(booksService, 'remove').mockImplementation(async () => undefined);
            expect(await booksController.remove(response, 9781640322790)).toBe(undefined);
        });
    });
});

