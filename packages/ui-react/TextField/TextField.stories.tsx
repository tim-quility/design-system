import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import React from 'react';
import TextField from './TextField';

const meta: Meta<typeof TextField> = {
    title: 'UI/TextField',
    component: TextField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        hint: { control: 'text' },
        error: { control: 'text', description: 'Error message string or boolean' },
        multiline: { control: 'boolean' },
        disabled: { control: 'boolean' },
        required: { control: 'boolean' },
        prefix: { control: 'text' },
        suffix: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof TextField>;

const Template: Story['render'] = (args) => {
    const [{ value }, updateArgs] = useArgs();

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        updateArgs({ value: e.target.value });
    };

    return <TextField {...args} value={value} onChange={onChange} />;
};

export const Default: Story = {
    args: {
        label: 'Email Address',
        placeholder: 'example@email.com',
        hint: 'We will never share your email.',
        value: '',
    },
    render: Template,
};

export const Multiline: Story = {
    args: {
        label: 'Bio',
        placeholder: 'Tell us about yourself...',
        multiline: true,
        rows: 4,
        value: '',
    },
    render: Template,
};

export const WithError: Story = {
    args: {
        label: 'Username',
        value: 'invaliduser',
        error: 'This username is already taken',
    },
    render: Template,
};

export const WithPrefixAndSuffix: Story = {
    args: {
        label: 'Price',
        value: '0.00',
        prefix: '$',
        suffix: 'USD',
    },
    render: Template,
};

export const Disabled: Story = {
    args: {
        label: 'API Key',
        value: 'sk_test_123456789',
        disabled: true,
    },
    render: Template,
};

export const ReadOnly: Story = {
    args: {
        label: 'System ID',
        value: 'SYS-1024',
        readOnly: true,
    },
    render: Template,
};
