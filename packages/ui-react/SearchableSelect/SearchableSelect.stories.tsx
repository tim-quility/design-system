import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import SearchableSelect from './SearchableSelect';

const meta: Meta<typeof SearchableSelect> = {
    title: 'UI/SearchableSelect',
    component: SearchableSelect,
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'changed' },
        onOptionDelete: { action: 'deleted' },
    },
    render: function Render(args) {
        const [{ value }, updateArgs] = useArgs();

        function onChange(newValue) {
            updateArgs({ value: newValue });
        }

        return <SearchableSelect {...args} onChange={onChange} value={value} />;
    },
};

export default meta;
type Story = StoryObj<typeof SearchableSelect>;

const defaultOptions = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
    { value: '4', label: 'Option 4' },
    { value: '5', label: 'Option 5' },
];

export const Default: Story = {
    args: {
        options: defaultOptions,
        placeholder: 'Select an option...',
    },
};

export const WithValue: Story = {
    args: {
        options: defaultOptions,
        value: '2',
    },
};

export const Disabled: Story = {
    args: {
        options: defaultOptions,
        disabled: true,
        value: '1',
    },
};

export const SearchDisabled: Story = {
    args: {
        options: defaultOptions,
        disableSearch: true,
        placeholder: 'Search disabled',
    },
};

export const CustomTooltip: Story = {
    args: {
        options: [
            ...defaultOptions,
            { value: '6', label: 'Disabled Option', disabled: true, tooltip: 'Custom tooltip reason' }
        ],
        placeholder: 'Hover disabled option',
    },
};
