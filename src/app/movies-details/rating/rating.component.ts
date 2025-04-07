import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.scss'
})
export class RatingComponent {
  @Output() ratingChange = new EventEmitter<number>();

  rating = 0;
  stars = Array(5).fill(0);

  setRating(value: number) {
    this.rating = value;
    this.ratingChange.emit(this.rating);
  }
}
