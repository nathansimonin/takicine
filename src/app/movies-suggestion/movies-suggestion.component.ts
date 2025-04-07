import {Component, Input} from '@angular/core';
import {Movie} from "../models/movie";
import {DatePipe, NgClass} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-movies-suggestion',
  standalone: true,
    imports: [
        NgClass,
        DatePipe,
        RouterLink
    ],
  templateUrl: './movies-suggestion.component.html',
  styleUrl: './movies-suggestion.component.scss'
})
export class MoviesSuggestionComponent {
  @Input({required: true}) movie!: Movie;
  @Input({required: true}) isGray!: boolean;
}
