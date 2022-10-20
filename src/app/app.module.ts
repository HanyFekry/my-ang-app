import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PhotosComponent } from './photos/photos.component';
import { AboutComponent } from './components/about/about.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BookStoreModule } from './bookStore/modules/book-store.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PostsComponent } from './blogs/posts/posts.component';
import { HttpClientModule } from "@angular/common/http";
import { CreateMovieComponent } from './components/create-movie/create-movie.component';
import { FormsModule } from '@angular/forms';
// import { BooksComponent } from './bookStore/components/books/books.component';
// import { BookItemComponent } from './bookStore/components/book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    AboutComponent,
    MoviesComponent,
    MovieItemComponent,
    HomeComponent,
    PostsComponent,
    CreateMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //,AppRoutingModule
    BookStoreModule,
    NgbModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
