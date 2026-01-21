import type { Meta, StoryObj } from '@storybook/vue3';
import Button from './Button.vue';

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        hierarchy: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        intent: {
            control: 'select',
            options: ['default', 'destructive'],
        },
        iconPosition: {
            control: 'radio',
            options: ['start', 'end'],
        },
        isLoading: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        hierarchy: 'primary',
        default: 'Primary Button',
    } as any,
    render: (args) => ({
        components: { Button },
        setup() { return { args }; },
        template: '<Button v-bind="args">{{ args.default }}</Button>',
    }),
};

export const Secondary: Story = {
    args: {
        hierarchy: 'secondary',
        default: 'Secondary Button',
    } as any,
    render: (args) => ({
        components: { Button },
        setup() { return { args }; },
        template: '<Button v-bind="args">{{ args.default }}</Button>',
    }),
};

export const Tertiary: Story = {
    args: {
        hierarchy: 'tertiary',
        default: 'Tertiary Button',
    } as any,
    render: (args) => ({
        components: { Button },
        setup() { return { args }; },
        template: '<Button v-bind="args">{{ args.default }}</Button>',
    }),
};

export const Destructive: Story = {
    args: {
        intent: 'destructive',
        default: 'Delete Account',
    } as any,
    render: (args) => ({
        components: { Button },
        setup() { return { args }; },
        template: '<Button v-bind="args">{{ args.default }}</Button>',
    }),
};

export const WithIcon: Story = {
    args: {
        default: 'Save',
        iconPosition: 'start',
    } as any,
    render: (args) => ({
        components: { Button },
        setup() { return { args }; },
        template: `
      <Button v-bind="args">
        <template #icon>
           <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
           </svg>
        </template>
        {{ args.default }}
      </Button>
    `,
    }),
};

export const IconOnly: Story = {
    args: {
        ariaLabel: 'Menu',
    },
    render: (args) => ({
        components: { Button },
        setup() { return { args }; },
        template: `
      <Button v-bind="args">
        <template #icon>
           <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
           </svg>
        </template>
      </Button>
    `,
    }),
};

export const Loading: Story = {
    args: {
        isLoading: true,
        default: 'Submitting...',
    } as any,
    render: (args) => ({
        components: { Button },
        setup() { return { args }; },
        template: '<Button v-bind="args">{{ args.default }}</Button>',
    }),
};
