import {Component, Input} from '@angular/core';
import {DatePipe} from "@angular/common";
import {Review} from "../models/review";

@Component({
  selector: 'app-movies-comment',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './movies-comment.component.html',
  styleUrl: './movies-comment.component.scss'
})
export class MoviesCommentComponent {
  @Input({required: true}) review!: Review;

  @Input({required: true}) isGray!: boolean
}
