import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'React Components/UI/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'changed' },
    },
    render: function Render(args) {
        const [{ checked }, updateArgs] = useArgs();

        function onChange() {
            updateArgs({ checked: !checked });
        }

        return <Checkbox {...args} onChange={onChange} checked={!!checked} />;
    },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    args: {
        label: 'Checkbox Option',
        name: 'checkbox-group',
    },
};

export const Checked: Story = {
    args: {
        label: 'Selected Option',
        name: 'checkbox-group',
        checked: true,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Option',
        name: 'checkbox-group',
        disabled: true,
    },
};

export const DisabledChecked: Story = {
    args: {
        label: 'Disabled & Checked',
        name: 'checkbox-group',
        disabled: true,
        checked: true,
    },
};

export const WithDescription: Story = {
    args: {
        label: 'Option with Description',
        description: 'This is some helper text to explain the option.',
        name: 'checkbox-group',
    },
};

export const BoxedVariant: Story = {
    args: {
        label: 'Boxed Variant',
        name: 'checkbox-group-boxed',
        variant: 'boxed',
    },
};

export const BoxedChecked: Story = {
    args: {
        label: 'Boxed & Checked',
        name: 'checkbox-group-boxed',
        variant: 'boxed',
        checked: true,
    },
};

export const WithError: Story = {
    args: {
        label: 'Error State',
        name: 'checkbox-group-error',
        hasError: true,
    },
};

export const WithRightElement: Story = {
    args: {
        label: 'With Right Icon',
        name: 'checkbox-group-icon',
        rightElement: <span style={{ fontSize: '12px' }}>★</span>,
        variant: 'boxed',
    },
};
