import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-update-movie',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './update-movie.component.html',
  styleUrl: './update-movie.component.scss'
})
export class UpdateMovieComponent implements OnInit {
  movieId!: number;
  movie: Movie = {
    title: '',
    director: '',
    releaseDate: new Date(),
    synopsis: '',
    id: undefined,
    rate: undefined,
    image: undefined
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private readonly moviesService: MoviesService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.movieId = +(this.activatedRoute.snapshot.paramMap.get('id')!);
    this.moviesService.getMovieById(this.movieId)
      .subscribe(movie => {        
        movie.releaseDate = new Date(movie.releaseDate);
        movie.releaseDate = movie.releaseDate.toISOString().split('T')[0]
        this.movie = movie;
      });
  }

  updateMovie() {
    this.moviesService.updateMovie(this.movieId, this.movie).subscribe(() =>
      this.router.navigate(['/movies'])
    );
  }
}
