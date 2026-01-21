import type { Meta, StoryObj } from '@storybook/vue3';
import DateFilter from './DateFilter.vue';

const meta: Meta<typeof DateFilter> = {
    title: 'UI/DateFilter',
    component: DateFilter,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['Simple', 'Sidebar'],
        },
        mode: {
            control: 'select',
            options: ['Single', 'Range'],
        },
        onCancel: { action: 'cancel' },
        onApply: { action: 'apply' },
    },
};

export default meta;
type Story = StoryObj<typeof DateFilter>;

export const RangeSimple: Story = {
    args: {
        title: 'Select Date Range',
        mode: 'Range',
        variant: 'Simple',
    },
    render: (args) => ({
        components: { DateFilter },
        setup() { return { args }; },
        template: '<DateFilter v-bind="args" @cancel="args.onCancel" @apply="args.onApply" />',
    }),
};

export const SingleSimple: Story = {
    args: {
        title: 'Select Single Date',
        mode: 'Single',
        variant: 'Simple',
    },
    render: (args) => ({
        components: { DateFilter },
        setup() { return { args }; },
        template: '<DateFilter v-bind="args" @cancel="args.onCancel" @apply="args.onApply" />',
    }),
};

export const SidebarVariant: Story = {
    args: {
        title: 'Date Filter',
        mode: 'Range',
        variant: 'Sidebar',
    },
    render: (args) => ({
        components: { DateFilter },
        setup() { return { args }; },
        template: '<DateFilter v-bind="args" @cancel="args.onCancel" @apply="args.onApply" />',
    }),
};

export const Preselected: Story = {
    args: {
        title: 'Pre-filled Range',
        mode: 'Range',
        initialStartDate: new Date(2023, 0, 1),
        initialEndDate: new Date(2023, 0, 7),
    },
    render: (args) => ({
        components: { DateFilter },
        setup() { return { args }; },
        template: '<DateFilter v-bind="args" @cancel="args.onCancel" @apply="args.onApply" />',
    }),
};
