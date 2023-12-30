import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import Validators if needed
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {


  existingBook: Book = {
    id: '',
    title:'',
    author:'',
    description:'',
    rate:0,
    dateStarted: new Date(),
    dateRead:new Date(),
    user:''
  } 

  constructor(
    private service:BookService, 
    private route:ActivatedRoute, 
    private router:Router) {}

  ngOnInit(): void {
    this.service.getBookById(this.route.snapshot.params['id'])
      .subscribe({
        next:(data) => {
          this.existingBook = data;
        }
      })
  }


  onSubmit(){
      //trigger the update
      this.service.updateBVook(this.existingBook)
      .subscribe({
        next:(data) => {
          this.router.navigate(['/books'])
        }
      })

  }
}


