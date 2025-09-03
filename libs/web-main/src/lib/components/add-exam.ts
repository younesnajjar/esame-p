import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ExamModel, ExamStatus } from '@esame/data-models';
import { Select } from 'primeng/select';
import { InputText } from 'primeng/inputtext';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AutoFocus } from 'primeng/autofocus';

@Component({
  selector: 'lib-add-exam',
  imports: [
    CommonModule,
    Button,
    FormsModule,
    DatePicker,
    ReactiveFormsModule,
    Select,
    InputText,
    TranslatePipe,
    AutoFocus,
  ],
  templateUrl: './add-exam.html',
  styleUrl: './add-exam.scss',
})
export class AddExam implements OnInit {
  ref = inject(DynamicDialogRef);
  fb = inject(FormBuilder);
  translate = inject(TranslateService);

  form!: FormGroup;

  statusOptions = [
    {
      label: this.translate.instant('status.to-organize'),
      value: ExamStatus.TO_ORGANIZE,
    },
    {
      label: this.translate.instant('status.in-search'),
      value: ExamStatus.IN_SEARCH_OF_PLACE,
    },
    {
      label: this.translate.instant('status.confirmed'),
      value: ExamStatus.CONFIRMED,
    },
    {
      label: this.translate.instant('status.canceled'),
      value: ExamStatus.CANCELLED,
    },
  ];

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      student: this.fb.group({
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
      }),
      meeting_point: [''],
      date: [new Date(), Validators.required],
      status: [ExamStatus.TO_ORGANIZE, Validators.required],
    });
  }

  submit(): void {
    if (this.form.valid) {
      this.ref.close(this.form.value as ExamModel);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
