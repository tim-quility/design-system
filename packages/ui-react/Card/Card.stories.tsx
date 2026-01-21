import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import Icon from '../icon/Icon';

const meta: Meta<typeof Card> = {
    title: 'UI/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        onClick: { action: 'clicked' },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        title: 'Card Title',
        description: 'This is a description of the card content.',
    },
};

export const WithMetadata: Story = {
    args: {
        title: 'Certification Course',
        description: 'Learn the basics of our design system in this comprehensive course.',
        duration: '2h 30m',
        typeLabel: 'Training',
    },
};

export const WithIcons: Story = {
    args: {
        title: 'Achievement Unlocked',
        description: 'You have completed the onboarding process.',
        topRightIcon: <Icon name="star" size={20} />,
        duration: '5 mins',
        durationIcon: <Icon name="clock" size={14} />,
        typeLabel: 'Milestone',
        typeIcon: <Icon name="flag" size={14} />,
    },
};

export const Clickable: Story = {
    args: {
        title: 'Clickable Card',
        description: 'Click this card to trigger an action.',
        onClick: () => console.log('Card clicked'),
        className: 'cursor-pointer',
    },
};
