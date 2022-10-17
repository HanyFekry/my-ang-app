import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Location } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { movie } from '../Models/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
@Input() movieItem:movie;
@Output() HideMovie:EventEmitter<movie>=new EventEmitter();
@Output() marked=new EventEmitter();
  constructor(private route: ActivatedRoute,
    private location: Location) { 
this.movieItem={
  id:0,
  title:'',
  category:'',
  duration:0,
  votes:0,
  isFavourite:false,
  
}
}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
  }
  UpVote(movieItem:movie):void{
    movieItem.votes+=1;
  }
  DownVote(movieItem:movie):void{
    movieItem.votes-=1;
  }
  hideMovieInChild(movieItem:movie): void{
    this.HideMovie.emit(movieItem);
  }
}
