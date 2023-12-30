import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BooksComponent } from './components/books/books.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { ShowBookComponent } from './components/show-book/show-book.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { ProfileComponent } from './components/profile/profile.component';
import {AuthGuard} from '@auth0/auth0-angular';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {
    path:"books", 
    component:BooksComponent, 
    canActivate:[AuthGuard]
  },
  {path:"new-book", component:CreateBookComponent, canActivate:[AuthGuard]},
  {path:"show-book/:id", component:ShowBookComponent, canActivate:[AuthGuard]},
  {path:"update-book/:id", component:UpdateBookComponent, canActivate:[AuthGuard]},
  {path:"delete-book/:id", component:DeleteBookComponent, canActivate:[AuthGuard]},
  {path:"profile", component:ProfileComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
