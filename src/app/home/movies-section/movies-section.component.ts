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
  @Input({required: true}) title!: string;
  @Input({required: true}) movies!: Movie[];
}
