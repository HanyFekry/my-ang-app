import { Injectable } from '@angular/core';
import { book } from './bookStore/models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  
  constructor() { }

  getBooksList():book[]{
    return [
      {
        id:1,
        title:'the great seven',
        auther:'Hany',
        price:90
      },
      {
        id:2,
        title:'the invensables',
        auther:'tarek',
        price:290        
      },
      {
        id:3,
        title:'art of war',
        auther:'maged',
        price:190        
      }
    ];
  }
}
