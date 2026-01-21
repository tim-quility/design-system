import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import React from 'react';
import Toggle from './Toggle';

const meta: Meta<typeof Toggle> = {
    title: 'UI/Toggle',
    component: Toggle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        checked: { control: 'boolean' },
        showStateLabel: { control: 'boolean' },
        disabled: { control: 'boolean' },
        isError: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

const Template: Story['render'] = (args) => {
    const [{ checked }, updateArgs] = useArgs();

    const onChange = (newChecked: boolean) => {
        updateArgs({ checked: newChecked });
    };

    return <Toggle {...args} checked={checked} onChange={onChange} />;
};

export const Default: Story = {
    args: {
        label: 'Airplane Mode',
        checked: false,
    },
    render: Template,
};

export const Checked: Story = {
    args: {
        label: 'Notifications',
        checked: true,
    },
    render: Template,
};

export const WithStateLabel: Story = {
    args: {
        label: 'Power',
        checked: true,
        showStateLabel: true,
    },
    render: Template,
};

export const Disabled: Story = {
    args: {
        label: 'A/B Testing (Locked)',
        checked: false,
        disabled: true,
    },
    render: Template,
};

export const ErrorState: Story = {
    args: {
        label: 'Critical System',
        checked: true,
        isError: true,
        showStateLabel: true,
    },
    render: Template,
};
