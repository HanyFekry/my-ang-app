import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
  id: number;
  title: string;
  duration: number;
  category: string;
  votes: number;
  isFavourite: boolean;
  @Output() addMovie: EventEmitter<any> = new EventEmitter();
  constructor() {
    this.id = 0;
    this.title = '';
    this.duration = 0;
    this.category = '';
    this.votes = 0;
    this.isFavourite = false;
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    let mv = {
      id: this.id,
      title: this.title,
      duration: this.duration,
      category: this.category,
      votes: this.votes,
      isFavourite: this.isFavourite
    }
    this.addMovie.emit(mv);
  }

}
