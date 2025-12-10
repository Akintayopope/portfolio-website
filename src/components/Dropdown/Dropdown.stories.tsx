// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    label: 'Select Country',
    options: ['Canada', 'USA', 'UK'],
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Dropdown',
    options: ['Canada', 'USA'],
    disabled: true,
  },
};
