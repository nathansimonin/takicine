import { Component, DestroyRef, Inject, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Movie } from '../models/movie';
import { Router, RouterLink } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [AsyncPipe, DatePipe, RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit {
  movies!: Movie[];

  constructor(
    private readonly moviesService: MoviesService,
    private readonly destroyRef: DestroyRef
  ) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(movies => this.movies = movies);
  }

  deleteMovie(id: number): void {
    this.moviesService.deleteMovie(id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() =>
      this.movies = this.movies.filter(film => film.id !== id)
    );
  }
}
