import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from "@angular/router";
import { MoviesComponent } from './components/movies/movies.component';
import { AboutComponent } from './components/about/about.component';
import { PhotosComponent } from './photos/photos.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './bookStore/components/books/books.component';
import { PostsComponent } from './blogs/posts/posts.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'movies', component: MoviesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'Pictures', component: PhotosComponent },
  { path: 'books', component: BooksComponent},
  { path: 'posts', component: PostsComponent}
];


@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
