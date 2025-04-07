import { Component,  } from '@angular/core';
import { Movie } from '../models/movie';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Review } from '../models/review';
import { AsyncPipe } from '@angular/common';
import { MoviesCommentComponent } from '../movies-comment/movies-comment.component';

@Component({
  selector: 'app-movies-details',
  standalone: true,
  imports: [AsyncPipe, MoviesCommentComponent],
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

  ngOnInit(): void {
    this.movieId = +(this.activatedRoute.snapshot.paramMap.get('id')!);
    this.moviesService.getMovieById(this.movieId)
      .subscribe(movie => {        
        movie.releaseDate = new Date(movie.releaseDate);
        movie.releaseDate = movie.releaseDate.toISOString().split('T')[0]
        this.movie = movie;
      });
    this.reviews$ = this.moviesService.getReviews(this.movieId);
  }

  extractYear(input: Date | string): number | null {
    const date = typeof input === 'string' ? new Date(input) : input;
    return isNaN(date.getTime()) ? null : date.getFullYear();
  }

  openModal() {
    console.log('open modal');
  }
}
