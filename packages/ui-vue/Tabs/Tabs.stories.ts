import type { Meta, StoryObj } from '@storybook/vue3';
import Tabs from './Tabs.vue';
import { h } from 'vue';

const meta: Meta<typeof Tabs> = {
    title: 'UI/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['line', 'contained'],
        },
        modelValue: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const sampleItems = [
    { id: 'tab1', label: 'Overview', content: 'Overview Content Area' },
    { id: 'tab2', label: 'Details', content: 'Detailed Information Here' },
    { id: 'tab3', label: 'Settings', content: 'Settings Configuration' },
];

export const LineVariant: Story = {
    args: {
        items: sampleItems,
        variant: 'line',
    } as any,
    render: (args) => ({
        components: { Tabs },
        setup() { return { args }; },
        template: '<Tabs v-bind="args" />',
    }),
};

export const ContainedVariant: Story = {
    args: {
        items: sampleItems,
        variant: 'contained',
    } as any,
    render: (args) => ({
        components: { Tabs },
        setup() { return { args }; },
        template: '<Tabs v-bind="args" />',
    }),
};

export const WithSlots: Story = {
    args: {
        items: [
            { id: 'profile', label: 'Profile' },
            { id: 'dashboard', label: 'Dashboard' },
        ],
        variant: 'line',
    } as any,
    render: (args) => ({
        components: { Tabs },
        setup() { return { args }; },
        template: `
      <Tabs v-bind="args">
        <template #profile>
          <div style="padding: 20px; border: 1px dashed #ccc;">
            <h3>User Profile</h3>
            <p>Custom slot content for profile tab.</p>
          </div>
        </template>
        <template #dashboard>
          <div style="padding: 20px; background: #f9f9f9;">
            <h3>Dashboard Charts</h3>
            <p>Complex dashboard widgets go here.</p>
          </div>
        </template>
      </Tabs>
    `,
    }),
};
