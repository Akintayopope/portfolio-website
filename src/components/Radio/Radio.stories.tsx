// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'Option A',
    name: 'example',
    value: 'A',
  },
};

export const Checked: Story = {
  args: {
    label: 'Option B',
    name: 'example',
    value: 'B',
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Option C',
    name: 'example',
    value: 'C',
    disabled: true,
  },
};
