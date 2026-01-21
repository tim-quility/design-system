import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { HorizontalStepper, Step } from './HorizontalStepper';

// Import the CSS so Storybook can render it correctly
import './horizontal-stepper.css';

// --- Sample Data ---
const sampleSteps: Step[] = [
  { id: 'upload', name: 'Upload File', description: 'Select CSV file' },
  { id: 'mapping', name: 'Map Fields', description: 'Match columns' },
  { id: 'validation', name: 'Validation', description: 'Check errors' },
  { id: 'import', name: 'Import', description: 'Process data' },
];

const meta: Meta<typeof HorizontalStepper> = {
  title: 'UI/HorizontalStepper',
  component: HorizontalStepper,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    // improved controls for the props
    currentStepId: {
      control: 'select',
      options: ['upload', 'mapping', 'validation', 'import'],
      description: 'The ID of the currently active step',
    },
    steps: {
      control: 'object',
      description: 'Array of step objects',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HorizontalStepper>;

// 1. First Step Active
export const Start: Story = {
  args: {
    steps: sampleSteps,
    currentStepId: 'upload',
  },
};

// 2. Middle Step Active
export const InProgress: Story = {
  args: {
    steps: sampleSteps,
    currentStepId: 'mapping',
  },
};

// 3. Last Step Active
export const Complete: Story = {
  args: {
    steps: sampleSteps,
    currentStepId: 'import',
  },
};

// 4. Custom Steps Data
export const CustomData: Story = {
  args: {
    currentStepId: 'details',
    steps: [
      { id: 'cart', name: 'Cart', description: 'Review items' },
      { id: 'details', name: 'Details', description: 'Shipping info' },
      { id: 'payment', name: 'Payment', description: 'Credit card' },
    ],
  },
};

// 5. Interactive Simulation
// This story includes buttons to let you "drive" the component
export const InteractiveFlow: Story = {
  render: (args) => {
    // We use a hook inside the render function to simulate app state
    const [currentId, setCurrentId] = useState(sampleSteps[0].id);

    const currentIndex = sampleSteps.findIndex(s => s.id === currentId);

    const goNext = () => {
      if (currentIndex < sampleSteps.length - 1) {
        setCurrentId(sampleSteps[currentIndex + 1].id);
      }
    };

    const goPrev = () => {
      if (currentIndex > 0) {
        setCurrentId(sampleSteps[currentIndex - 1].id);
      }
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* The Component */}
        <HorizontalStepper
          {...args}
          steps={sampleSteps}
          currentStepId={currentId}
        />

        {/* Controls for the Demo */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            style={{ padding: '8px 16px', cursor: currentIndex === 0 ? 'not-allowed' : 'pointer' }}
          >
            Previous
          </button>

          <button
            onClick={goNext}
            disabled={currentIndex === sampleSteps.length - 1}
            style={{ padding: '8px 16px', cursor: currentIndex === sampleSteps.length - 1 ? 'not-allowed' : 'pointer' }}
          >
            Next Step
          </button>
        </div>

        <p style={{ textAlign: 'center', fontFamily: 'monospace', color: '#666' }}>
          Current ID: <strong>{currentId}</strong>
        </p>
      </div>
    );
  },
};