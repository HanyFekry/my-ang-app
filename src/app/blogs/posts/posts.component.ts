import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { post } from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postslist: post[] = [];
  comments: [] = [];
  constructor(private posts: PostsService) { }

  ngOnInit(): void {
    this.getPostsList();
    this.getComments();
  }
  getPostsList() {
    this.posts.getPosts().subscribe(p => this.postslist = p);
  }
  getComments() {
    this.posts.getComments().subscribe(d => this.comments = d);
  }
}
