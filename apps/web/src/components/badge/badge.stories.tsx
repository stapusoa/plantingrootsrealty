import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';
import type { BadgeProps } from './types';

const meta: Meta<BadgeProps> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['filled', 'outlined', 'ghost'],
    },
    color: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'critical', 'neutral', 'default'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
    shape: {
      control: { type: 'radio' },
      options: ['rounded', 'square'],
    },
  },
  args: {
    variant: 'filled',
    color: "primary",
    size: "md",
    shape: "rounded",
    children: 'New',
  },
};

export default meta;

type Story = StoryObj<BadgeProps>;

export const Default: Story = {
  args: {
    children: "New",
    color: "primary",
    size: "md",
    shape: "rounded",
  },
};
