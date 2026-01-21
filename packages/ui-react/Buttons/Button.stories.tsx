import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

// Metadata configuration for Storybook
const meta: Meta<typeof Button> = {
  title: 'React Components/UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    hierarchy: {
      control: 'inline-radio',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    intent: {
      control: 'inline-radio',
      options: ['default', 'destructive'],
    },
    disabled: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ========== Basic Stories ==========

/**
 * The default Primary button. Click to interact and see hover/active states.
 */
export const Primary: Story = {
  args: {
    hierarchy: 'primary',
    size: 'md',
    children: 'Click me',
  },
};

/**
 * Secondary button with border and transparent background.
 */
export const Secondary: Story = {
  args: {
    hierarchy: 'secondary',
    size: 'md',
    children: 'Secondary',
  },
};

/**
 * Tertiary button with minimal styling (text + hover).
 */
export const Tertiary: Story = {
  args: {
    hierarchy: 'tertiary',
    size: 'md',
    children: 'Tertiary',
  },
};

// ========== Intent: Destructive ==========

/**
 * Primary button with destructive intent (red).
 */
export const DestructivePrimary: Story = {
  args: {
    hierarchy: 'primary',
    intent: 'destructive',
    size: 'md',
    children: 'Delete',
  },
};

/**
 * Secondary button with destructive intent (red border, light red hover).
 */
export const DestructiveSecondary: Story = {
  args: {
    hierarchy: 'secondary',
    intent: 'destructive',
    size: 'md',
    children: 'Delete',
  },
};

// ========== Size Variants ==========

/**
 * Small primary button.
 */
export const SizeSmall: Story = {
  args: {
    hierarchy: 'primary',
    size: 'sm',
    children: 'Small',
  },
};

/**
 * Medium primary button (default size).
 */
export const SizeMedium: Story = {
  args: {
    hierarchy: 'primary',
    size: 'md',
    children: 'Medium',
  },
};

/**
 * Large primary button.
 */
export const SizeLarge: Story = {
  args: {
    hierarchy: 'primary',
    size: 'lg',
    children: 'Large',
  },
};

// ========== States ==========

/**
 * Disabled primary button.
 */
export const Disabled: Story = {
  args: {
    hierarchy: 'primary',
    size: 'md',
    disabled: true,
    children: 'Disabled',
  },
};

/**
 * Loading state: spinner animates and button is disabled.
 */
export const Loading: Story = {
  args: {
    hierarchy: 'primary',
    size: 'md',
    isLoading: true,
    children: 'Saving...',
  },
};

// ========== Icon Examples ==========

/**
 * Button with icon at the start (default).
 * Icon prop accepts any React node (SVG, component, emoji, etc.).
 */
export const IconStart: Story = {
  args: {
    hierarchy: 'primary',
    size: 'md',
    icon: '→',
    iconPosition: 'start',
    children: 'Next',
  },
};

/**
 * Button with icon at the end.
 */
export const IconEnd: Story = {
  args: {
    hierarchy: 'primary',
    size: 'md',
    icon: '←',
    iconPosition: 'end',
    children: 'Back',
  },
};

/**
 * Icon-only button (no text label).
 * IMPORTANT: must include ariaLabel for accessibility.
 */
export const IconOnly: Story = {
  args: {
    hierarchy: 'primary',
    size: 'md',
    icon: '⚙️',
    ariaLabel: 'Settings',
  },
};

/**
 * Small icon-only button.
 */
export const IconOnlySmall: Story = {
  args: {
    hierarchy: 'primary',
    size: 'sm',
    icon: '+',
    ariaLabel: 'Add',
  },
};

/**
 * Large icon-only button.
 */
export const IconOnlyLarge: Story = {
  args: {
    hierarchy: 'primary',
    size: 'lg',
    icon: '★',
    ariaLabel: 'Favorite',
  },
};

// ========== Combinations ==========

/**
 * All size variants in a grid (Primary).
 */
export const AllSizesPrimary: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

/**
 * All hierarchy variants.
 */
export const AllHierarchies: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button hierarchy="primary">Primary</Button>
      <Button hierarchy="secondary">Secondary</Button>
      <Button hierarchy="tertiary">Tertiary</Button>
    </div>
  ),
};

/**
 * Primary button in all sizes with destructive intent.
 */
export const AllSizesDestructive: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button size="sm" intent="destructive">
        Delete
      </Button>
      <Button size="md" intent="destructive">
        Delete
      </Button>
      <Button size="lg" intent="destructive">
        Delete
      </Button>
    </div>
  ),
};

/**
 * Common action scenarios.
 */
export const CommonActions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button hierarchy="primary">Save</Button>
      <Button hierarchy="secondary">Cancel</Button>
      <Button hierarchy="tertiary">Learn more</Button>
      <Button hierarchy="primary" intent="destructive">
        Delete
      </Button>
    </div>
  ),
};
