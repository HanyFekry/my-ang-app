import { Component, OnInit, Input } from '@angular/core';
import { book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
@Input() bookItem:book;
  constructor() { 
    this.bookItem={
      id:0,
      title:'',
      auther:'',
      price:0
    }
  }

  ngOnInit(): void {
  }

}
