import { inject, Inject, Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { EnvModel, ExamModel } from '@esame/data-models';
import {v4 as uuidv4} from 'uuid';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExamsService {

  http = inject(HttpClient);
  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(@Inject('environment') private environment: EnvModel) {}
  getExams(): Observable<ExamModel[]> {
    return this.http.get<ExamModel[]>(`${this.environment.backendApi}/exams`);
  }

  addExam(exam: ExamModel): Observable<ExamModel> {
    return this.http.post<ExamModel>(`${this.environment.backendApi}/exams`, exam);
  }
}
