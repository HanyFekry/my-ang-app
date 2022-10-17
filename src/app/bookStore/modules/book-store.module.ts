import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { BooksComponent } from '../components/books/books.component';
import { BookItemComponent } from '../components/book-item/book-item.component';


@NgModule({
  declarations: [
    BooksComponent,
    BookItemComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: []
})
export class BookStoreModule { }
