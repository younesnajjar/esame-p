import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {
  addExam,
  addExamFailure,
  addExamSuccess,
  loadExams,
  loadExamsFailure,
  loadExamsSuccess
} from './exam.actions';
import { ExamModel } from '@esame/data-models';

export const examsFeatureKey = 'exams';

export interface ExamState extends EntityState<ExamModel> {
  loaded: boolean;
  addingExam: boolean;
}

export const examsAdapter: EntityAdapter<ExamModel> =
  createEntityAdapter<ExamModel>();

export const websiteInitialState: ExamState = examsAdapter.getInitialState({
  loaded: false,
  addingExam: false
});

export const reducer = createReducer(
  websiteInitialState,
  on(loadExams, (state) => ({
    ...state,
    loaded: false,
  })),
  on(loadExamsSuccess, (state, { exams }) => {
    return examsAdapter.addMany(exams, {
      ...state,
      loaded: true,
      error: null,
    })
  }),
  on(loadExamsFailure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  })),

  on(addExam, (state) => ({
    ...state,
    addingExam: true
  })),
  on(addExamSuccess, (state, { exam }) => {
    return examsAdapter.addOne(exam, {
      ...state,
      addingExam: false,
      error: null,
    })
  }),
  on(addExamFailure, (state, { error }) => ({
    ...state,
    error,
    addingExam: false,
  })),
);



export function examsReducer(state: ExamState | undefined, action: Action) {
  return reducer(state, action);
}
