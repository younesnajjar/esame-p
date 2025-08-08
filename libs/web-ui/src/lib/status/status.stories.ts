import type { Meta, StoryObj } from '@storybook/angular';
import { ExamStatus } from '@esame/data-models';
import { Status } from './status';

const meta: Meta<Status> = {
  component: Status,
  title: 'WebUi / Status',
};
export default meta;

type Story = StoryObj<Status>;

export const InProgress: Story = {
  args: {
    status: ExamStatus.IN_SEARCH_OF_PLACE
  },
};
export const Confirmed: Story = {
  args: {
    status: ExamStatus.CONFIRMED
  },
};

export const Canceled: Story = {
  args: {
    status: ExamStatus.CANCELLED
  },
};

export const ToOrganize: Story = {
  args: {
    status: ExamStatus.TO_ORGANIZE
  },
};
