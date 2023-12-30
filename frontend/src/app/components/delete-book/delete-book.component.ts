import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  existingBook: any; 
  
  constructor(
     private service:BookService,
     private route:ActivatedRoute, 
     private router:Router
    ){}


  ngOnInit(): void {
    this.service.getBookById(this.route.snapshot.params['id'])
      .subscribe({
        next:(data) => {
          this.existingBook = data;
        }
      })
  }

  deleteBook(id:string){
     //trigger the delete
     this.service.deleteBook(id)
     .subscribe({
       next:(data) => {
         this.router.navigate(['/books'])
       }
     })
  }

}
