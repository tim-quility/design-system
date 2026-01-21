import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
    title: 'React Components/UI/RadioButton',
    component: RadioButton,
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'changed' },
    },
    render: function Render(args) {
        const [{ checked }, updateArgs] = useArgs();

        function onChange() {
            if (!checked) updateArgs({ checked: true });
        }

        return <RadioButton {...args} onChange={onChange} checked={!!checked} />;
    },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
    args: {
        label: 'Radio Option',
        value: 'option1',
        name: 'radio-group',
    },
};

export const Checked: Story = {
    args: {
        label: 'Selected Option',
        value: 'option2',
        name: 'radio-group',
        checked: true,
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Option',
        value: 'option3',
        name: 'radio-group',
        disabled: true,
    },
};

export const DisabledChecked: Story = {
    args: {
        label: 'Disabled & Checked',
        value: 'option4',
        name: 'radio-group',
        disabled: true,
        checked: true,
    },
};

export const WithDescription: Story = {
    args: {
        label: 'Option with Description',
        description: 'This is some helper text to explain the option.',
        value: 'option5',
        name: 'radio-group',
    },
};

export const BoxedVariant: Story = {
    args: {
        label: 'Boxed Variant',
        value: 'option6',
        name: 'radio-group-boxed',
        variant: 'boxed',
    },
};

export const BoxedChecked: Story = {
    args: {
        label: 'Boxed & Checked',
        value: 'option7',
        name: 'radio-group-boxed',
        variant: 'boxed',
        checked: true,
    },
};

export const WithError: Story = {
    args: {
        label: 'Error State',
        value: 'option8',
        name: 'radio-group-error',
        hasError: true,
    },
};

export const WithRightElement: Story = {
    args: {
        label: 'With Right Icon',
        value: 'option9',
        name: 'radio-group-icon',
        rightElement: <span style={{ fontSize: '12px' }}>★</span>,
        variant: 'boxed',
    },
};
