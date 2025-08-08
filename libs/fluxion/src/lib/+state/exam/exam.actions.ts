import { createAction, props } from '@ngrx/store';
import { ExamModel, IError } from '@esame/data-models';


export const loadExams = createAction('[Exams] Load Exams');
export const loadExamsSuccess = createAction('[Exams] Load Exams Success', props<{ exams: ExamModel[]}>());
export const loadExamsFailure = createAction('[Exams] Load Exams Failure', props<{ error: IError }>());



export const addExam = createAction('[Exams] Add Exams', props<{ exam: ExamModel}>());
export const addExamSuccess = createAction('[Exams] Add Exams Success', props<{ exam: ExamModel}>());
export const addExamFailure = createAction('[Exams] Add Exams Failure', props<{ error: IError }>());



