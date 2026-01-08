import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Alerts } from './Alerts';

// Custom 'X' icon to match 12x12 size requirement
// Using 'currentColor' allows it to inherit the semantic color (Error Red, Success Green, etc.)
const CustomDismissIcon = (
  <svg 
    width="12" 
    height="12" 
    viewBox="0 0 12 12" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    <path 
      d="M9 3L3 9M3 3L9 9" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

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
    dismissIcon: CustomDismissIcon,
  },
};

// With Action story
export const WithAction: Story = {
  args: {
    children: 'This alert has an action button.',
    type: 'actionable',
    action: 'Undo',
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
    action: 'Retry', 
    dismissIcon: CustomDismissIcon,
  },
};