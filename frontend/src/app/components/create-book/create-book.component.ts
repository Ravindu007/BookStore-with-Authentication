import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit{

  user :any = {}


  newBookForm: Book = {
    id: '',
    title:'',
    author:'',
    description:'',
    rate:0,
    dateStarted: new Date(),
    dateRead:new Date(),
    user:''
  };

  constructor (private services:BookService, private router:Router,  public auth:AuthService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => {
        this.user = profile   
        this.newBookForm.user = this.user.email   
      }
    )
  }

  onSubmit(){
    this.services.addBook(this.newBookForm)
      .subscribe({
        next:(data) => {
          this.router.navigate(['/books'])
        }
      })
  }

}



