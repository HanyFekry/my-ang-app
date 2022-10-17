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
// import { BooksComponent } from './bookStore/components/books/books.component';
// import { BookItemComponent } from './bookStore/components/book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    AboutComponent,
    MoviesComponent,
    MovieItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //,AppRoutingModule
    ,BookStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
