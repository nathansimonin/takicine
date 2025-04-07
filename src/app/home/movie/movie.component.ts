import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [DatePipe, RouterLink],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss'
})
export class MovieComponent {
  @Input({required: true}) movie!: Movie;
}
