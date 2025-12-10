// @ts-ignore
import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    title: 'Welcome to Our Platform',
    subtitle: 'Build stunning UI components with ease',
    backgroundImage: 'https://placehold.co/1200x500',
  },
};

export const WithButton: Story = {
  args: {
    title: 'Build Something Great',
    subtitle: 'Start today and design faster',
    backgroundImage: 'https://placehold.co/1200x500',
    showButton: true,
    buttonText: 'Get Started',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Unavailable',
    subtitle: 'This hero is disabled',
    backgroundImage: 'https://placehold.co/1200x500',
    disabled: true,
  },
};
