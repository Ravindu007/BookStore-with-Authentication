import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { BookService } from './services/book.service';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShowBookComponent } from './components/show-book/show-book.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { ProfileComponent } from './components/profile/profile.component'

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    DeleteBookComponent,
    CreateBookComponent,
    UpdateBookComponent,
    HomeComponent,
    NavbarComponent,
    ShowBookComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'dev-w6a5r3d3bzt1m8yl.us.auth0.com',
      clientId: 'gGr53fgDsWSOWMG7DmrS0caeAXlj5NxA',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
