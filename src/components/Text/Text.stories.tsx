// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from './Text';

const meta: Meta<typeof TextInput> = {
  title: 'Core/TextInput',
  component: TextInput,
  argTypes: {
    label: { control: 'text', defaultValue: 'Username' },
    placeholder: { control: 'text', defaultValue: 'Enter your name' },
    disabled: { control: 'boolean', defaultValue: false },
  },
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: { disabled: true },
};
