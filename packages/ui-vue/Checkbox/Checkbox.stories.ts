import type { Meta, StoryObj } from '@storybook/vue3';
import Checkbox from './Checkbox.vue';

const meta: Meta<typeof Checkbox> = {
    title: 'UI/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        description: { control: 'text' },
        modelValue: { control: 'boolean' },
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
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {
        label: 'Identify yourself',
        modelValue: false,
    } as any,
    render: (args) => ({
        components: { Checkbox },
        setup() {
            return { args };
        },
        template: '<Checkbox v-bind="args" v-model="args.modelValue" />',
    }),
};

export const Checked: Story = {
    args: {
        label: 'I accept the terms',
        modelValue: true,
    } as any,
    render: (args) => ({
        components: { Checkbox },
        setup() { return { args }; },
        template: '<Checkbox v-bind="args" v-model="args.modelValue" />',
    }),
};

export const Disabled: Story = {
    args: {
        label: 'Cannot uncheck this',
        modelValue: true,
        disabled: true,
    } as any,
    render: (args) => ({
        components: { Checkbox },
        setup() { return { args }; },
        template: '<Checkbox v-bind="args" v-model="args.modelValue" />',
    }),
};

export const WithDescription: Story = {
    args: {
        label: 'Subscribe to newsletter',
        description: 'We will send you weekly updates about our products.',
        modelValue: false,
    } as any,
    render: (args) => ({
        components: { Checkbox },
        setup() { return { args }; },
        template: '<Checkbox v-bind="args" v-model="args.modelValue" />',
    }),
};

export const Boxed: Story = {
    args: {
        label: 'Business Account',
        description: 'For companies and teams.',
        variant: 'boxed',
        modelValue: false,
    } as any,
    render: (args) => ({
        components: { Checkbox },
        setup() { return { args }; },
        template: '<Checkbox v-bind="args" v-model="args.modelValue" />',
    }),
};

export const ErrorState: Story = {
    args: {
        label: 'I agree to the privacy policy',
        hasError: true,
        modelValue: false,
    } as any,
    render: (args) => ({
        components: { Checkbox },
        setup() { return { args }; },
        template: '<Checkbox v-bind="args" v-model="args.modelValue" />',
    }),
};

export const WithRightElement: Story = {
    args: {
        label: 'Expandable Option',
        variant: 'boxed',
        modelValue: false,
        rotateIconOnCheck: true,
    } as any,
    render: (args) => ({
        components: { Checkbox },
        setup() { return { args }; },
        template: `
      <Checkbox v-bind="args" v-model="args.modelValue">
        <template #rightElement>
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
        </template>
      </Checkbox>
    `,
    }),
};
