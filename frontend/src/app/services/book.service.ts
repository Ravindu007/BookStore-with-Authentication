import { Injectable, OnInit } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Book } from '../interfaces/book';
import { v4 as uuidv4 } from 'uuid'; // Import the uuid library
import { AuthService } from '@auth0/auth0-angular';


@Injectable({
  providedIn: 'root'
})

export class BookService{

  _baseURL: string = 'https://localhost:7134';

  constructor(private http: HttpClient) { }
  

  getAllBooks(email: string): Observable<Book[]> {
    const url = `${this._baseURL}/api/Book?email=${email}`;
    return this.http.get<Book[]>(url);
  }

  addBook(newBook : Book): Observable<Book> {
    newBook.id = uuidv4();
    return this.http.post<Book>(this._baseURL + "/api/Book", newBook);
  } 

  getBookById(id:string) : Observable<Book>{
    return this.http.get<Book>(this._baseURL + "/api/Book/" + id)
  }

  updateBVook(updateBook: Book) : Observable<Book>{
    return this.http.put<Book>(this._baseURL + "/api/Book/" + updateBook.id, updateBook)
  }

  deleteBook(id:string) : Observable<Book>{
    return this.http.delete<Book>(this._baseURL + "/api/Book/" + id)
  }
  
}


