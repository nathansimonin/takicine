import { Component } from '@angular/core';
import { Movie } from '../../models/movie';
import { FormsModule } from '@angular/forms';
import { MoviesService } from '../../services/movies.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, formatCurrency, NgIf } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  standalone: true,
  imports: [FormsModule, RouterLink, NgIf, CommonModule],
  templateUrl: './add-movie.component.html',
  styleUrl: './add-movie.component.scss'
})
export class AddMovieComponent {
  movie: Movie = {
    title: '',
    director: '',
    releaseDate: new Date(),
    synopsis: '',
    id: undefined,
    rate: undefined,
    image: undefined
  }

  constructor(private readonly moviesService: MoviesService, private readonly router: Router) {}

  addMovie(form: NgForm): void {
    if (!form.valid) {
      form.control.markAllAsTouched();
      return;
    }

    this.moviesService.addMovie(this.movie).subscribe(
        () => this.router.navigate(['/movies'])
    );
 }
}
