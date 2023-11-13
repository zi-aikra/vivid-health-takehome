export class Books
{
    _id: string;
    isbn: number;
    title: string;
    author: string;
    genre: string;
    edition: string;
    coverImageUrl: string;
    bindingType: string;
    publisher: string;
    datePublished: Date;
    pages: number;
    listPrice: number;
    listPriceCurrency: string;
    quantity: number;
    dateAdded: Date;
    updated: Date;

    constructor(_id, isbn, title, author, genre, edition, coverImageUrl, bindingType, publisher, datePublished, pages, listPrice, listPriceCurrency, quantity, dateAdded, updated)
    {
        this._id = _id;
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.edition = edition;
        this.coverImageUrl = coverImageUrl;
        this.bindingType = bindingType;
        this.publisher = publisher;
        this.datePublished = datePublished;
        this.pages = pages;
        this.listPrice = listPrice;
        this.listPriceCurrency = listPriceCurrency;
        this.quantity = quantity;
        this.dateAdded = dateAdded;
        this.updated = updated;
    }
}