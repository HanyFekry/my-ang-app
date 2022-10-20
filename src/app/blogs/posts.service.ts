import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { post } from './posts/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  getPosts(): Observable<post[]> {
    return this.http.get<post[]>("https://jsonplaceholder.typicode.com/posts?_limit=5");
  }
  getComments(): Observable<[]> {
    return this.http.get<[]>("https://jsonplaceholder.typicode.com/comments?_limit=5");
  }
}
