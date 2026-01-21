import type { Meta, StoryObj } from '@storybook/vue3';
import TextField from './TextField.vue';

const meta: Meta<typeof TextField> = {
    title: 'UI/TextField',
    component: TextField,
    tags: ['autodocs'],
    argTypes: {
        modelValue: { control: 'text' },
        label: { control: 'text' },
        hint: { control: 'text' },
        error: { control: 'text' },
        placeholder: { control: 'text' },
        disabled: { control: 'boolean' },
        readOnly: { control: 'boolean' },
        required: { control: 'boolean' },
        multiline: { control: 'boolean' },
        prefix: { control: 'text' },
        suffix: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
    args: {
        label: 'Email Address',
        placeholder: 'user@example.com',
        modelValue: '',
    } as any,
    render: (args) => ({
        components: { TextField },
        setup() { return { args }; },
        template: '<TextField v-bind="args" v-model="args.modelValue" />',
    }),
};

export const WithHint: Story = {
    args: {
        label: 'Username',
        hint: 'Must be unique and at least 3 chars.',
        modelValue: '',
    } as any,
    render: (args) => ({
        components: { TextField },
        setup() { return { args }; },
        template: '<TextField v-bind="args" v-model="args.modelValue" />',
    }),
};

export const ErrorState: Story = {
    args: {
        label: 'Password',
        type: 'password',
        error: 'Password is too weak.',
        modelValue: '12345',
    } as any,
    render: (args) => ({
        components: { TextField },
        setup() { return { args }; },
        template: '<TextField v-bind="args" v-model="args.modelValue" />',
    }),
};

export const Disabled: Story = {
    args: {
        label: 'License Key',
        modelValue: 'XXXX-YYYY-ZZZZ',
        disabled: true,
    } as any,
    render: (args) => ({
        components: { TextField },
        setup() { return { args }; },
        template: '<TextField v-bind="args" v-model="args.modelValue" />',
    }),
};

export const Multiline: Story = {
    args: {
        label: 'Comments',
        multiline: true,
        placeholder: 'Enter your feedback here...',
        modelValue: '',
    } as any,
    render: (args) => ({
        components: { TextField },
        setup() { return { args }; },
        template: '<TextField v-bind="args" v-model="args.modelValue" />',
    }),
};

export const WithAffix: Story = {
    args: {
        label: 'Price',
        prefix: '$',
        suffix: 'USD',
        type: 'number',
        modelValue: '',
    } as any,
    render: (args) => ({
        components: { TextField },
        setup() { return { args }; },
        template: '<TextField v-bind="args" v-model="args.modelValue" />',
    }),
};
