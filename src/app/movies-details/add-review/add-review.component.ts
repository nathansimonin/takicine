import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RatingComponent } from '../rating/rating.component';
import { CommonModule } from '@angular/common';
import { Review } from '../../models/review';
import { ReviewsService } from '../../services/reviews.service';

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
    private fb: FormBuilder,
    private reviewService: ReviewsService,
    private router: Router
  ) { }

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
    this.form.patchValue({ rate: rate });
  }

  submit() {
    if (this.form.valid) {
      const formValue = this.form.value;
      const review: Review = {
        user: {
          id: 1
        },
        movie: {
          id: this.movieId,
        },
        rate: formValue.rate,
        text: formValue.text,
        reviewDate: new Date()
      }

      this.reviewService.addReview(review).subscribe();
      this.router.navigateByUrl(`/movies/${this.movieId}`).then(() => {
        window.location.reload();
      });
    }
  }
}
