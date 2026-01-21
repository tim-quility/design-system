import type { Meta, StoryObj } from '@storybook/react';
import Alert from './Alert';
import Icon from '../icon/Icon';

const meta: Meta<typeof Alert> = {
    title: 'React Components/UI/Alert',
    component: Alert,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['info', 'success', 'error', 'warning'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
    args: {
        title: 'Information Alert',
        children: 'This is an informational message.',
        type: 'info',
    },
};

export const Success: Story = {
    args: {
        title: 'Success!',
        children: 'The operation completed successfully.',
        type: 'success',
    },
};

export const Error: Story = {
    args: {
        title: 'Error Occurred',
        children: 'Something went wrong. Please try again.',
        type: 'error',
    },
};

export const WithIcon: Story = {
    args: {
        title: 'Alert with Icon',
        children: 'This alert includes a custom icon.',
        type: 'info',
        icon: <Icon name="bell" size={20} />,
    },
};
