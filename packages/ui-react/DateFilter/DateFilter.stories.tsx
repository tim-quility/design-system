import type { Meta, StoryObj } from '@storybook/react';
import DateFilter from './DateFilter';

const meta: Meta<typeof DateFilter> = {
    title: 'UI/DateFilter',
    component: DateFilter,
    tags: ['autodocs'],
    argTypes: {
        onCancel: { action: 'cancelled' },
        onApply: { action: 'applied' },
    },
};

export default meta;
type Story = StoryObj<typeof DateFilter>;

export const Default: Story = {
    args: {
        title: 'Filter by Date',
    },
};

export const SidebarVariant: Story = {
    args: {
        title: 'Date Range',
        variant: 'Sidebar',
        presets: [
            { label: 'Today', value: 'today' },
            { label: 'Yesterday', value: 'yesterday' },
            { label: 'Last 7 Days', value: '7days' },
            { label: 'This Month', value: 'thismonth' },
            { label: 'Last Month', value: 'lastmonth' },
        ]
    },
};

export const SingleDateMode: Story = {
    args: {
        title: 'Select Date',
        mode: 'Single',
    },
};

export const CustomTitle: Story = {
    args: {
        title: 'Transaction Date',
        variant: 'Sidebar',
    },
};
