import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksService } from 'src/app/books.service';
import { book } from '../../models/book';
//import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit,OnDestroy {
  books:book[]=[];
  constructor(private bookService:BooksService) { }

  ngOnInit(): void {
    this.getBooks();
    // this.books=[
    //   {
    //     id:1,
    //     title:'hi there',
    //     auther:'HF',
    //     price:500
    //   }
    // ];    
  }
  ngOnDestroy(): void {
    this.books=[];
  }
  getBooks(){
    this.books=this.bookService.getBooksList();
  }
}
