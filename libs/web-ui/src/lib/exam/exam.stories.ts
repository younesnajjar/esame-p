import type { Meta, StoryObj } from '@storybook/angular';
import { expect } from 'storybook/test';
import { Exam } from './exam';
import { ExamStatus } from '@esame/data-models';

const meta: Meta<Exam> = {
  component: Exam,
  title: 'WebUi / Exam',
};
export default meta;

type Story = StoryObj<Exam>;

export const Primary: Story = {
  args: {
    exam: {
      id: 'exam1',
      student: {
        first_name: 'N.',
        last_name: 'Younes',
      },
      date: new Date(),
      meeting_point: 'Class a',
      status: ExamStatus.TO_ORGANIZE,
    }
  },
};
