import { Route } from '@angular/router';
import { Exams } from './pages/exams/exams';
import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import {
  ExamEffects,
  fromExams
} from '@esame/fluxion';
export const webMainRoutes: Route[] = [
  { path: '', component: Exams,
  providers: [
    provideState(fromExams.examsFeatureKey, fromExams.examsReducer),
    provideEffects(ExamEffects),
  ]}
];
