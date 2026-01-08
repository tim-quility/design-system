import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Alerts } from './Alerts';

// Meta configuration for the component
const meta: Meta<typeof Alerts> = {
  title: 'Components/Alerts',
  component: Alerts,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['actionable', 'callout'],
    },
    status: {
      control: 'select',
      options: ['error', 'success', 'info', 'warning'],
    },
    dismissible: {
      control: 'boolean',
    },
    // We can't really control ReactNodes easily with controls, but we can provide placeholders
  },
  args: {
    onDismiss: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof Alerts>;

// Default story
export const Default: Story = {
  args: {
    children: 'This is a default alert message.',
    type: 'actionable',
    status: 'info',
  },
};

// Success story
export const Success: Story = {
  args: {
    children: 'Operation completed successfully!',
    type: 'callout',
    status: 'success',
  },
};

// Warning story
export const Warning: Story = {
  args: {
    children: 'Please be careful with this action.',
    type: 'callout',
    status: 'warning',
  },
};

// Error story
export const Error: Story = {
  args: {
    children: 'An error occurred while processing your request.',
    type: 'callout',
    status: 'error',
  },
};

// Dismissible story
export const Dismissible: Story = {
  args: {
    children: 'You can dismiss this alert.',
    dismissible: true,
    dismissIcon: <span>✕</span>,
  },
};

// With Action story
export const WithAction: Story = {
  args: {
    children: 'This alert has an action button.',
    type: 'actionable',
    action: <button style={{ padding: '4px 8px' }}>Undo</button>,
  },
};

// Full Featured story
export const FullFeatured: Story = {
  args: {
    children: 'This alert has everything.',
    type: 'actionable',
    status: 'warning',
    dismissible: true,
    icon: <span>⚠️</span>,
    action: <button style={{ padding: '4px 8px' }}>Retry</button>,
    dismissIcon: <span>✕</span>,
  },
};
