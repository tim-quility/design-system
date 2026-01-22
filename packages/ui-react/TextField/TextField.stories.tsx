import type { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';

const meta: Meta<typeof TextField> = {
    title: 'React Components/UI/TextField',
    component: TextField,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        hint: { control: 'text' },
        error: { control: 'text' }, // Allows testing error string
        multiline: { control: 'boolean' },
        disabled: { control: 'boolean' },
        readOnly: { control: 'boolean' },
        required: { control: 'boolean' },
        type: {
            control: 'select',
            options: ['text', 'password', 'email', 'number', 'tel', 'url']
        },
    },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
    args: {
        label: 'Standard Input',
        hint: 'This is a helper text',
        placeholder: 'Placeholder text...'
    },
};

export const Password: Story = {
    args: {
        label: 'Password',
        type: 'password',
        hint: 'Your secure password',
        placeholder: '••••••••'
    },
};

export const WithError: Story = {
    args: {
        label: 'Error State',
        error: 'Invalid email address',
        value: 'invalid-email',
    },
};

export const Multiline: Story = {
    args: {
        label: 'Biography',
        multiline: true,
        hint: 'Tell us about yourself',
        rows: 4
    },
};

export const WithAffix: Story = {
    args: {
        label: 'Price',
        prefix: '$',
        suffix: 'USD',
        type: 'number'
    },
};
