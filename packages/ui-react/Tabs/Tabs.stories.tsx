import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'UI/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    argTypes: {
        onChange: { action: 'changed' },
    },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const defaultItems = [
    { id: 'tab1', label: 'Tab 1', content: <div>Content for Tab 1</div> },
    { id: 'tab2', label: 'Tab 2', content: <div>Content for Tab 2</div> },
    { id: 'tab3', label: 'Tab 3', content: <div>Content for Tab 3</div> },
];

export const Default: Story = {
    args: {
        items: defaultItems,
    },
};

export const ContainedVariant: Story = {
    args: {
        items: defaultItems,
        variant: 'contained',
    },
};

export const PreSelected: Story = {
    args: {
        items: defaultItems,
        defaultActiveId: 'tab2',
    },
};
