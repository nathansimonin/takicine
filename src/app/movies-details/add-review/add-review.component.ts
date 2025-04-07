import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RatingComponent } from '../rating/rating.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-review',
  standalone: true,
  imports: [ReactiveFormsModule, RatingComponent, CommonModule],
  templateUrl: './add-review.component.html',
  styleUrl: './add-review.component.scss'
})
export class AddReviewComponent implements OnInit {
  public movieId!: number;
  public form!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.movieId = +(this.activatedRoute.snapshot.paramMap.get('id')!);

    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      rate: ['', Validators.required],
      text: ['', Validators.required],
    });
  }

  onRatingChange(rate: number) {
    this.form.value.rate = rate;
  }
}
