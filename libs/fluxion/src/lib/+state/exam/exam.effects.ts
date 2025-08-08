import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import {  switchMap, of, catchError } from 'rxjs';
import * as ExamActions from './exam.actions';
import { ExamsService } from '../../services/exams.service';

@Injectable()
export class ExamEffects {
  private actions$ = inject(Actions);
  private examsService = inject(ExamsService);

  loadExams$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExamActions.loadExams),
      switchMap(() =>
        this.examsService.getExams().pipe(
          switchMap((data) =>
            of(ExamActions.loadExamsSuccess({ exams: data }))
          ),
          catchError((error) =>
            of(ExamActions.loadExamsFailure({ error }))
          )
        )
      )
    )
  );

  addExams$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ExamActions.addExam),
      switchMap(({exam}) =>
        this.examsService.addExam(exam).pipe(
          switchMap((data) =>
            of(ExamActions.addExamSuccess({ exam: data }))
          ),
          catchError((error) =>
            of(ExamActions.addExamFailure({ error }))
          )
        )
      )
    )
  );

}
