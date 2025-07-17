import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';
import type { BadgeProps } from './types';

const meta: Meta<BadgeProps> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
    // REMOVE children control to allow JSX
  },
  args: {
    variant: 'default',
  },
};

export default meta;

type Story = StoryObj<BadgeProps>;

export const Default: Story = {
  args: {},
};
