import { Component, Input } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { Movie } from '../../models/movie';

import { CarouselModule } from 'primeng/carousel'

@Component({
  selector: 'app-movies-section',
  standalone: true,
  imports: [MovieComponent, CarouselModule],
  templateUrl: './movies-section.component.html',
  styleUrl: './movies-section.component.scss'
})
export class MoviesSectionComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) movies!: Movie[];

  public filteredMovies: Movie[] = [];

  filterByLetters() {
    this.filteredMovies = this.movies.slice().sort((a, b) => a.title.localeCompare(b.title));
  }

  filterByReleaseDate() {
    this.filteredMovies = this.movies.slice().sort((a, b) =>
      new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
    );
  }

  filterByRateAscending() {
    this.filteredMovies = this.movies.slice().sort((a, b) => (a.rate ?? 0) - (b.rate ?? 0));
  }

  filterByRateDescending() {
    this.filteredMovies = this.movies.slice().sort((a, b) => (b.rate ?? 0) - (a.rate ?? 0));
  }

  resetFilter() {
    this.filteredMovies = [];
  }
}
