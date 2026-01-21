import type { Meta, StoryObj } from '@storybook/vue3';
import Toggle from './Toggle.vue';

const meta: Meta<typeof Toggle> = {
    title: 'UI/Toggle',
    component: Toggle,
    tags: ['autodocs'],
    argTypes: {
        modelValue: { control: 'boolean' },
        label: { control: 'text' },
        disabled: { control: 'boolean' },
        showStateLabel: { control: 'boolean' },
        isError: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
    args: {
        modelValue: false,
        label: 'Enable Notifications',
    } as any,
    render: (args) => ({
        components: { Toggle },
        setup() { return { args }; },
        template: '<Toggle v-bind="args" v-model="args.modelValue" />',
    }),
};

export const OnState: Story = {
    args: {
        modelValue: true,
        label: 'WiFi',
        showStateLabel: true,
    } as any,
    render: (args) => ({
        components: { Toggle },
        setup() { return { args }; },
        template: '<Toggle v-bind="args" v-model="args.modelValue" />',
    }),
};

export const Disabled: Story = {
    args: {
        modelValue: false,
        label: 'Airplane Mode',
        disabled: true,
    } as any,
    render: (args) => ({
        components: { Toggle },
        setup() { return { args }; },
        template: '<Toggle v-bind="args" v-model="args.modelValue" />',
    }),
};

export const DisabledOn: Story = {
    args: {
        modelValue: true,
        label: 'Bluetooth',
        disabled: true,
    } as any,
    render: (args) => ({
        components: { Toggle },
        setup() { return { args }; },
        template: '<Toggle v-bind="args" v-model="args.modelValue" />',
    }),
};

export const ErrorState: Story = {
    args: {
        modelValue: true,
        label: 'Critical Setting',
        isError: true,
        showStateLabel: true,
    } as any,
    render: (args) => ({
        components: { Toggle },
        setup() { return { args }; },
        template: '<Toggle v-bind="args" v-model="args.modelValue" />',
    }),
};
