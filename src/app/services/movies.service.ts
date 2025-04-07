import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private readonly url = "http://localhost:8080/movies"

  constructor(private readonly httpClient: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.url);
  }

  addMovie(movie: Movie) : Observable<Movie> {
    return this.httpClient.post<Movie>(this.url, movie);
  }

  deleteMovie(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  getMovieById(movieId: number) : Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.url}/${movieId}`);
  }

  updateMovie(movieId: number, movie: Movie) {
    return this.httpClient.put<Movie>(`${this.url}/${movieId}`, movie);
  }

  getReviews(movieId: number): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(`${this.url}/${movieId}/reviews`);
  }
}