import type { Meta, StoryObj } from '@storybook/vue3';
import Alerts from './Alerts.vue';

const meta: Meta<typeof Alerts> = {
  title: 'Alerts/Alerts',
  component: Alerts,
  tags: ['autodocs'],
  argTypes: {
    device: { control: 'radio', options: ['Mobile', 'Desktop'] },
    type: { control: 'radio', options: ['Actionable', 'Callout'] },
    status: { control: 'select', options: ['Error', 'Success', 'Info', 'Warning'] },
    dismissible: { control: 'boolean' },
    action: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Alerts>;

export const Default: Story = {
  args: {
    device: 'Mobile',
    type: 'Actionable',
    status: 'Error',
    dismissible: true,
    action: 'Action',
  },
  render: (args) => ({
    components: { Alerts },
    setup() {
      return { args };
    },
    template: `
      <Alerts v-bind="args">
        This is an alert message.
        <template #icon>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block;">
            <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.2"/>
            <path d="M8 4V8M8 11H8.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </template>
      </Alerts>
    `,
  }),
};
