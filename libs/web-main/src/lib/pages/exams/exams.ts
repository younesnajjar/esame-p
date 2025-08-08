import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { addExam, ExamState, loadExams, selectAllWebsites } from '@esame/fluxion';
import { Store } from '@ngrx/store';
import { Exam } from '@esame/web-ui';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Button } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddExam } from '../../components/add-exam';
import { ExamModel } from '@esame/data-models';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'lib-exams',
  imports: [CommonModule, Exam, TranslatePipe, Button, DialogModule],
  templateUrl: './exams.html',
  styleUrl: './exams.scss',
  providers: [DialogService],
})
export class Exams implements OnInit {
  store = inject(Store<ExamState>);
  dialogService = inject(DialogService);
  translate = inject(TranslateService);

  exams$ = this.store.select(selectAllWebsites);
  ngOnInit() {
    this.store.dispatch(loadExams());
  }

  openOrganizerModal() {
    const ref: DynamicDialogRef = this.dialogService.open(AddExam, {
      header: this.translate.instant('global.organize-an-exam'),
      width: '35rem',
      dismissableMask: true,
      styleClass: 'p-fluid',
      closable: true
    });

    ref.onClose.subscribe((exam: ExamModel | undefined) => {
      if (exam) {
        this.store.dispatch(addExam({exam}));
        // this.exams$ = of([...this.exams]); // refresh observable
      }
    });
  }
}
