import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public books: Book[] = [];
  user :any = {}

  constructor(private service:BookService, private router:Router, public auth:AuthService) {}

  ngOnInit(){
    this.auth.user$.subscribe(
      (profile) => {
        this.user = profile
        console.log(this.user.email);

        this.service.getAllBooks(this.user.email)
        .subscribe({
          next: (data) => {
            this.books = data;
          },
          error:(response) => {
            console.log(response)
          }
        })
        
      }
    )
  }

  showBook(id:string) {
     //to route refer the routing module
    this.router.navigate(["show-book/" + id]) 
  }

  updateBook(id:string) {
    this.router.navigate(["update-book/" + id]) 
  }

  deleteBook(id:string) {
    this.router.navigate(["delete-book/" + id]) 
  }

}
