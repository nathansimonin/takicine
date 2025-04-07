import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { MoviesSectionComponent } from './movies-section/movies-section.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MoviesSectionComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  allMovies: Movie[] = [];
  bestMovies: Movie[] = [];
  trendyMovies: Movie[] = [];
  currentMovies: Movie[] = [];

  constructor(private readonly moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(movies => {
      this.allMovies = movies;
      this.bestMovies = movies.filter(x => x.rate == 5);
      this.trendyMovies = movies.filter(x => x.rate == 5);

      const today = new Date();
      const thirtyDaysAgo = new Date(today.setDate(today.getDate() - 30));
      this.currentMovies = movies.filter(x => new Date(x.releaseDate) >= thirtyDaysAgo);
    });
  }
}
