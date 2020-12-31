import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { TechniqueService } from 'src/app/techniques/technique.service';
import { Technique } from 'src/app/techniques/technique';

import { switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/quiz';
import { QuizService } from 'src/app/quiz.service';
import { Flashcard } from 'src/app/flashcard';
import { FlashcardService } from 'src/app/flashcard.service';

@Component({
  selector: 'app-technique-detail',
  templateUrl: './technique-detail.component.html',
  styleUrls: ['./technique-detail.component.scss'],
})
export class TechniqueDetailComponent implements OnInit {
  technique$: Observable<Technique>;
  quiz$: Observable<Quiz>;
  flashcard$: Observable<Flashcard>;
  display = false;
  videoUrl$: Observable<any>;
  videoUrl = 'https://www.youtube.com/embed/XxV9jHMcQ-w';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private techniqueService: TechniqueService,
    private quizService: QuizService,
    private flashcardService: FlashcardService
  ) {}

  ngOnInit(): void {
    this.getTechnique();
    this.getQuiz();
    this.getFlashcard();
    this.getVideoUrl();
  }

  getVideoUrl(): void {
    this.videoUrl$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.techniqueService.getVideo(+params.get('id'))
      )
    );
  }

  getTechnique(): void {
    this.technique$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.techniqueService.getTechnique(+params.get('id'))
      )
    );
  }

  getQuiz(): void {
    this.quiz$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.quizService.getQuiz(+params.get('id'))
      )
    );
  }

  getFlashcard(): void {
    this.flashcard$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.flashcardService.getFlashcard(+params.get('id'))
      )
    );
  }

  goBack(techniqueId: number): void {
    this.router.navigate(['/techniques', { id: techniqueId }]);
  }
}
