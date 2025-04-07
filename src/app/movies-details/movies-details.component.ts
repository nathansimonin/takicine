import { Component,  } from '@angular/core';
import { Movie } from '../models/movie';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movies-details',
  standalone: true,
  imports: [],
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

  comments$: Observable<Movie[]> = this.moviesService.getReviews();

  ngOnInit(): void {
    this.movieId = +(this.activatedRoute.snapshot.paramMap.get('id')!);
    this.moviesService.getMovieById(this.movieId)
      .subscribe(movie => {        
        movie.releaseDate = new Date(movie.releaseDate);
        movie.releaseDate = movie.releaseDate.toISOString().split('T')[0]
        this.movie = movie;
      });
    
  }

  extractYear(input: Date | string): number | null {
    const date = typeof input === 'string' ? new Date(input) : input;
    return isNaN(date.getTime()) ? null : date.getFullYear();
  }
}
