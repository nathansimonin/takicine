import { Component, Input } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies-section',
  standalone: true,
  imports: [MovieComponent],
  templateUrl: './movies-section.component.html',
  styleUrl: './movies-section.component.scss'
})
export class MoviesSectionComponent {
  @Input({required: true}) title!: string;
  @Input({required: true}) movies!: Movie[];
}
