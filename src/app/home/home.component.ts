import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { AsyncPipe, DatePipe } from '@angular/common';
import { MoviesSectionComponent } from './movies-section/movies-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, MoviesSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  movies$: Observable<Movie[]> = this.moviesService.getMovies();

  constructor(private readonly moviesService: MoviesService) {}

}
