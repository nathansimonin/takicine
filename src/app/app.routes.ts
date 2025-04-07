import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { UpdateMovieComponent } from './movies/update-movie/update-movie.component';
import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { AddReviewComponent } from './movies-details/add-review/add-review.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'movies', component: MoviesComponent},
    { path: 'movies/:id', component: MoviesDetailsComponent},
    { path: 'movies/:id/review', component: AddReviewComponent },
    { path: 'add-movie', component: AddMovieComponent},
    { path: 'update-movie/:id', component: UpdateMovieComponent}
];

