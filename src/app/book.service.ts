import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  public readonly API_URL_LIST = 'http://localhost:3000/books';
  public readonly API_URL_GET_ONE_BY_ID = 'http://localhost:3000/books/';
  public readonly API_URL_CREATE_NEW = 'http://localhost:3000/books';
  public readonly API_URL_DELETE_BY_ID = 'http://localhost:3000/books/';
  public readonly API_URL_UPDATE = 'http://localhost:3000/books/';

  constructor(private http: HttpClient) { }

  getAllList(): Observable<Book[]>{
    return this.http.get<Book[]>(this.API_URL_LIST);
  }

  getBookById(id: number): Observable<Book>{
    return this.http.get<Book>(this.API_URL_GET_ONE_BY_ID + id);
  }

  createBook(book: Book): Observable<Book>{
    return this.http.post<Book>(this.API_URL_CREATE_NEW, book);
  }

  deleteBook(id: number): Observable<any>{
    return this.http.delete(this.API_URL_DELETE_BY_ID + id);
  }

  editBook(book: Book): Observable<Book>{
    return this.http.put<Book>(this.API_URL_UPDATE + book.id, book);
  }
}
