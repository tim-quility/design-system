import type { Meta, StoryObj } from '@storybook/vue3';
import HorizontalStepper from './HorizontalStepper.vue';

const meta: Meta<typeof HorizontalStepper> = {
    title: 'UI/HorizontalStepper',
    component: HorizontalStepper,
    tags: ['autodocs'],
    argTypes: {
        currentStepId: {
            control: 'select',
            options: ['upload', 'mapping', 'preview', 'import'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof HorizontalStepper>;

const sampleSteps = [
    { id: 'upload', name: 'Upload File', description: 'Select CSV data' },
    { id: 'mapping', name: 'Map Columns', description: 'Match fields' },
    { id: 'preview', name: 'Validation', description: 'Check for errors' },
    { id: 'import', name: 'Import', description: 'Process records' },
];

export const Default: Story = {
    args: {
        steps: sampleSteps,
        currentStepId: 'upload',
    } as any,
    render: (args) => ({
        components: { HorizontalStepper },
        setup() { return { args }; },
        template: '<HorizontalStepper v-bind="args" />',
    }),
};

export const InProgress: Story = {
    args: {
        steps: sampleSteps,
        currentStepId: 'preview',
    } as any,
    render: (args) => ({
        components: { HorizontalStepper },
        setup() { return { args }; },
        template: '<HorizontalStepper v-bind="args" />',
    }),
};

export const Complete: Story = {
    args: {
        steps: sampleSteps,
        currentStepId: 'import',
    } as any,
    render: (args) => ({
        components: { HorizontalStepper },
        setup() { return { args }; },
        template: '<HorizontalStepper v-bind="args" />',
    }),
};
