import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})

export class ReviewsService {
  private readonly url = "http://localhost:8080/reviews"

  constructor(private readonly httpClient: HttpClient) { }

  addReview(review: Review) : Observable<Movie> {
    return this.httpClient.post<Movie>(this.url, review);
  }
}