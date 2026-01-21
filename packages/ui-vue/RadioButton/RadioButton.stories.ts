import type { Meta, StoryObj } from '@storybook/vue3';
import RadioButton from './RadioButton.vue';

const meta: Meta<typeof RadioButton> = {
    title: 'UI/RadioButton',
    component: RadioButton,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        description: { control: 'text' },
        value: { control: 'text' },
        modelValue: { control: 'text' },
        disabled: { control: 'boolean' },
        hasError: { control: 'boolean' },
        variant: {
            control: 'select',
            options: ['simple', 'boxed'],
        },
        rotateIconOnCheck: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
    args: {
        label: 'Standard Option',
        value: 'opt1',
        modelValue: '',
    } as any,
    render: (args) => ({
        components: { RadioButton },
        setup() { return { args }; },
        template: '<RadioButton v-bind="args" v-model="args.modelValue" />',
    }),
};

export const Selected: Story = {
    args: {
        label: 'Selected Option',
        value: 'opt1',
        modelValue: 'opt1',
    } as any,
    render: (args) => ({
        components: { RadioButton },
        setup() { return { args }; },
        template: '<RadioButton v-bind="args" v-model="args.modelValue" />',
    }),
};

export const Disabled: Story = {
    args: {
        label: 'Unavailable Option',
        value: 'opt2',
        disabled: true,
    } as any,
    render: (args) => ({
        components: { RadioButton },
        setup() { return { args }; },
        template: '<RadioButton v-bind="args" v-model="args.modelValue" />',
    }),
};

export const WithDescription: Story = {
    args: {
        label: 'Detailed Choice',
        description: 'This option includes helpful context below the label.',
        value: 'opt3',
        modelValue: '',
    } as any,
    render: (args) => ({
        components: { RadioButton },
        setup() { return { args }; },
        template: '<RadioButton v-bind="args" v-model="args.modelValue" />',
    }),
};

export const BoxedVariant: Story = {
    args: {
        label: 'Card-like Radio',
        description: 'Use boxed variant for more emphasis.',
        variant: 'boxed',
        value: 'opt4',
        modelValue: '',
    } as any,
    render: (args) => ({
        components: { RadioButton },
        setup() { return { args }; },
        template: '<RadioButton v-bind="args" v-model="args.modelValue" />',
    }),
};

export const ErrorState: Story = {
    args: {
        label: 'Invalid Selection',
        hasError: true,
        value: 'opt5',
        modelValue: '',
    } as any,
    render: (args) => ({
        components: { RadioButton },
        setup() { return { args }; },
        template: '<RadioButton v-bind="args" v-model="args.modelValue" />',
    }),
};

export const WithRightElement: Story = {
    args: {
        label: 'Expandable',
        variant: 'boxed',
        value: 'opt6',
        modelValue: '',
        rotateIconOnCheck: true,
    } as any,
    render: (args) => ({
        components: { RadioButton },
        setup() { return { args }; },
        template: `
      <RadioButton v-bind="args" v-model="args.modelValue">
        <template #rightElement>
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
        </template>
      </RadioButton>
    `,
    }),
};
