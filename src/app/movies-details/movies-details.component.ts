import {Component, OnInit,} from '@angular/core';
import { Movie } from '../models/movie';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import {Observable, switchMap, tap} from 'rxjs';
import { Review } from '../models/review';
import { AsyncPipe } from '@angular/common';
import { MoviesCommentComponent } from '../movies-comment/movies-comment.component';
import {MoviesSuggestionComponent} from "../movies-suggestion/movies-suggestion.component";

@Component({
  selector: 'app-movies-details',
  standalone: true,
  imports: [AsyncPipe, MoviesCommentComponent, MoviesSuggestionComponent],
  templateUrl: './movies-details.component.html',
  styleUrl: './movies-details.component.scss'
})
export class MoviesDetailsComponent {
  constructor(
    private readonly moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
  ) { }

  movieId!: number;
  movie: Movie = {
    title: '',
    director: '',
    releaseDate: '',
    synopsis: '',
    id: undefined,
    rate: undefined,
    image: undefined
  };

  reviews$!: Observable<Review[]>;
  allMovies: Movie[] = [];

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
        tap(param =>  this.movieId = Number(param.get('id'))),
        switchMap(() => this.moviesService.getMovieById(this.movieId))
    ).subscribe(movie => {
        movie.releaseDate = new Date(movie.releaseDate);
        movie.releaseDate = movie.releaseDate.toISOString().split('T')[0]
        this.movie = movie;

      this.reviews$ = this.moviesService.getReviews(this.movieId);
      });
    this.moviesService.getMovies().subscribe(movies => {
      this.allMovies = movies;
    });

  }

  extractYear(input: Date | string): number | null {
    const date = typeof input === 'string' ? new Date(input) : input;
    return isNaN(date.getTime()) ? null : date.getFullYear();
  }

  openModal() {
    console.log('open modal');
  }
}
