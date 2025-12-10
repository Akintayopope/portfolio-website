// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    title: 'Card Title',
    subtitle: 'Short description of the card',
    imageSrc: 'https://placehold.co/640x360',
    children: 'This is the card body content. You can put anything here.',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const NoImage: Story = {
  args: {
    imageSrc: undefined,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
