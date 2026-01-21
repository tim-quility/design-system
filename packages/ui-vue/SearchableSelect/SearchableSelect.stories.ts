import type { Meta, StoryObj } from '@storybook/vue3';
import SearchableSelect from './SearchableSelect.vue';

const meta: Meta<typeof SearchableSelect> = {
    title: 'UI/SearchableSelect',
    component: SearchableSelect,
    tags: ['autodocs'],
    argTypes: {
        modelValue: { control: 'text' },
        placeholder: { control: 'text' },
        disabled: { control: 'boolean' },
        disableSearch: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof SearchableSelect>;

const sampleOptions = [
    { label: 'Option 1', value: 'opt1' },
    { label: 'Option 2', value: 'opt2' },
    { label: 'Option 3', value: 'opt3' },
    { label: 'Disabled Option', value: 'opt4', disabled: true },
    { label: 'Vue.js', value: 'vue' },
    { label: 'React', value: 'react' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
];

export const Default: Story = {
    args: {
        options: sampleOptions,
        placeholder: 'Select framework...',
        modelValue: null,
    } as any,
    render: (args) => ({
        components: { SearchableSelect },
        setup() {
            return { args };
        },
        template: `
      <div style="height: 300px;">
        <SearchableSelect v-bind="args" v-model="args.modelValue" />
      </div>
    `,
    }),
};

export const Preselected: Story = {
    args: {
        options: sampleOptions,
        modelValue: 'vue',
    } as any,
    render: (args) => ({
        components: { SearchableSelect },
        setup() { return { args }; },
        template: `
      <div style="height: 300px;">
        <SearchableSelect v-bind="args" v-model="args.modelValue" />
      </div>
    `,
    }),
};

export const Disabled: Story = {
    args: {
        options: sampleOptions,
        modelValue: 'react',
        disabled: true,
    } as any,
    render: (args) => ({
        components: { SearchableSelect },
        setup() { return { args }; },
        template: `
      <div style="height: 300px;">
        <SearchableSelect v-bind="args" v-model="args.modelValue" />
      </div>
    `,
    }),
};

export const NoSearch: Story = {
    args: {
        options: sampleOptions.slice(0, 4),
        placeholder: 'Simple Select',
        disableSearch: true,
    } as any,
    render: (args) => ({
        components: { SearchableSelect },
        setup() { return { args }; },
        template: `
      <div style="height: 300px;">
        <SearchableSelect v-bind="args" v-model="args.modelValue" />
      </div>
    `,
    }),
};
