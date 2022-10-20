import { Component, OnInit, OnDestroy } from '@angular/core';
import { movie } from "../Models/movie";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnDestroy {

  movies: movie[] = [];
  constructor() { }

  ngOnInit(): void {
    this.movies = [
      {
        id: 1,
        title: 'home a lone',
        duration: 80,
        category: 'family',
        votes: 0,
        isFavourite: false
      },
      {
        id: 2,
        title: 'Gladiator',
        duration: 80,
        category: 'history',
        votes: 0,
        isFavourite: false
      },
      {
        id: 3,
        title: 'nemo',
        duration: 70,
        category: 'kids',
        votes: 0,
        isFavourite: false
      },
      {
        id: 4,
        title: 'I got your mail',
        duration: 90,
        category: 'Romance',
        votes: 0,
        isFavourite: false
      }
    ]
  }
  ngOnDestroy(): void {
    this.movies = [];
  }
  hideMovieInParent(movieItem: movie): void {
    this.movies = this.movies.filter(m => m.id != movieItem.id);
  }
  mark(movieItem: movie): void {
    var m: movie;
    m = this.movies.find(m => m.id == movieItem.id) ?? new movie;
    if (m.isFavourite)
      m.isFavourite = false;
    else
      m.isFavourite = true;

  }
  pushMovie(mv: movie): void {
    this.movies.push(mv);
  }
}
