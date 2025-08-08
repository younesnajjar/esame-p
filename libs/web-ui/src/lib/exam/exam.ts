import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { ExamModel } from '@esame/data-models';
import { Status } from '../status/status';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'lib-exam',
  imports: [CommonModule, Status, TranslatePipe],
  templateUrl: './exam.html',
  styleUrl: './exam.scss',
})
export class Exam {
  exam = input<ExamModel>();
}
