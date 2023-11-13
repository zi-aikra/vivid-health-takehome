import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LibraryService } from './library.service';
import { Books } from './Books';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  library$: Observable<any> | undefined;
  title = 'Library';

  constructor(private libraryService: LibraryService) { }

  rows = [
    "Book ID",
    "ISBN", 
    "Title", 
    "Author", 
    "Genre", 
    "Edition", 
    "Cover Image",
    "Binding",
    "Publisher", 
    "Date Published", 
    "Pages",
    "Price",
    "Quantity",
    "Date Added", 
    "Date Updated"
  ];

  data = [
    "_id",
    "isbn",
    "title",
    "author",
    "genre",
    "edition",
    "coverImageUrl",
    "bindingType",
    "publisher",
    "datePublished",
    "pages",
    "listPrice",
    "listPriceCurrency",
    "quantity",
    "dateAdded",
    "updated"
  ];

  books: Books[] = [];

  ngOnInit(): void {
    //this.library$ = this.libraryService.getBooks();
    this.libraryService.getBooks().subscribe(
      (response) => {
        this.books = response;
      },
      (error) => console.log("Error: "+ error)
    );
  }
}
