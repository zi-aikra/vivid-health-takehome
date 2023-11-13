import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Books } from './Books';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private httpClient: HttpClient) { }

  url : string = 'http://localhost:3000/books'; // process.env.REST_API_URL + '/books' || 'http://localhost:3000/books'

  getBooks() {
    
    return this.httpClient.get<Books[]>(this.url);
  }
}
