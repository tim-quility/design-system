import type { Meta, StoryObj } from '@storybook/vue3';
import Alert from './Alert.vue';

const meta: Meta<typeof Alert> = {
    title: 'UI/Alert',
    component: Alert,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['info', 'success', 'error', 'warning'],
        },
        title: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
    args: {
        type: 'info',
        title: 'Information Alert',
        default: 'This is an informational message passed to the default slot.',
    } as any, // casting as any to bypass strict type check on slots passing as args
    render: (args) => ({
        components: { Alert },
        setup() {
            return { args };
        },
        template: `
      <Alert v-bind="args">
        {{ args.default }}
      </Alert>
    `,
    }),
};

export const WithIcon: Story = {
    args: {
        type: 'success',
        title: 'Success!',
        default: 'Operation completed successfully.',
    } as any,
    render: (args) => ({
        components: { Alert },
        setup() {
            return { args };
        },
        template: `
      <Alert v-bind="args">
        <template #icon>
           <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
             <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.707 6.707l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L7 8.586l3.293-3.293a1 1 0 011.414 1.414z"/>
           </svg>
        </template>
        {{ args.default }}
      </Alert>
    `,
    }),
};

export const ErrorType: Story = {
    args: {
        type: 'error',
        title: 'Critical Error',
        default: 'Something went wrong. Please try again.',
    } as any,
    render: (args) => ({
        components: { Alert },
        setup() {
            return { args };
        },
        template: `
      <Alert v-bind="args">
        {{ args.default }}
      </Alert>
    `,
    }),
};
