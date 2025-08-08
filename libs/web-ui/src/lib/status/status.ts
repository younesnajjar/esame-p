import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chip } from 'primeng/chip';
import { ExamStatus } from '@esame/data-models';
import { TranslatePipe } from '@ngx-translate/core';
import { Tag } from 'primeng/tag';

@Component({
  selector: 'lib-status',
  imports: [CommonModule, TranslatePipe, Tag],
  templateUrl: './status.html',
  styleUrl: './status.scss',
})
export class Status {
  status = input<ExamStatus>();
  protected readonly ExamStatus = ExamStatus;
}
