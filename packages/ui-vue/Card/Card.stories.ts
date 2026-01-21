import type { Meta, StoryObj } from '@storybook/vue3';
import Card from './Card.vue';

const meta: Meta<typeof Card> = {
    title: 'UI/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        duration: { control: 'text' },
        typeLabel: { control: 'text' },
        clickable: { control: 'boolean' },
        onClick: { action: 'clicked' },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        title: 'Project Basics',
        description: 'Learn the fundamentals of project management.',
        duration: '1h 30m',
        typeLabel: 'Course',
    },
    render: (args) => ({
        components: { Card },
        setup() { return { args }; },
        template: '<Card v-bind="args" @click="args.onClick" />',
    }),
};

export const WithIcons: Story = {
    args: {
        title: 'Advanced React',
        description: 'Deep dive into hooks and performance.',
        duration: '45 mins',
        typeLabel: 'Video',
        clickable: true,
    },
    render: (args) => ({
        components: { Card },
        setup() { return { args }; },
        template: `
      <Card v-bind="args" @click="args.onClick">
        <template #topRightIcon>
           <svg width="24" height="24" fill="none" class="text-gray-400" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
           </svg>
        </template>
        <template #durationIcon>
           <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
           </svg>
        </template>
        <template #typeIcon>
           <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
           </svg>
        </template>
      </Card>
    `,
    }),
};
