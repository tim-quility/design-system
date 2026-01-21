import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import React from 'react';
import Modal from './Modal';
import Button from '../Buttons/Button'; // Ensure this path is correct

const meta: Meta<typeof Modal> = {
    title: 'React Components/UI/Modal',
    component: Modal,
    parameters: {
        layout: 'fullscreen',
        docs: {
            story: {
                inline: false,
                iframeHeight: 500,
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        isOpen: { control: 'boolean' },
        paddingVariant: {
            control: 'radio',
            options: ['standard', 'large'],
        },
        width: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

// --- Render Template (Handles isOpen state) ---
const Template: Story['render'] = (args) => {
    const [{ isOpen }, updateArgs] = useArgs();

    const onClose = () => updateArgs({ isOpen: false });
    const openModal = () => updateArgs({ isOpen: true });

    return (
        <div style={{ padding: '20px', minHeight: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f0f2f5' }}>
            <Button onClick={openModal}>Open Modal</Button>

            <Modal {...args} isOpen={isOpen} onClose={onClose}>
                {args.children}
            </Modal>
        </div>
    );
};

// --- Story 1: Default / Standard ---
export const Default: Story = {
    args: {
        isOpen: true,
        title: 'Standard Modal',
        children: (
            <div>
                <p style={{ margin: 0 }}>This is the default modal content with standard padding.</p>
                <p style={{ marginTop: '1rem', color: '#666' }}>
                    Click the "Open Modal" button behind this overlay to re-open if you close it.
                </p>
            </div>
        ),
        footer: (
            <Modal.Footer alignment="right">
                <Button hierarchy="primary" onClick={() => { }}>Confirm</Button>
            </Modal.Footer>
        )
    },
    render: Template,
};

// --- Story 2: Complex Navigation (Split) ---
export const SplitFooter: Story = {
    args: {
        isOpen: true,
        title: 'Split Action Footer',
        children: <p style={{ margin: 0 }}>The footer has a tertiary action on the left and primary actions on the right.</p>,
        footer: (
            <Modal.Footer alignment="split">
                {/* Tertiary on left */}
                <Button hierarchy="tertiary" onClick={() => { }}>Delete</Button>

                {/* Right side group */}
                <div style={{ display: 'flex', gap: '8px' }}>
                    <Button hierarchy="secondary" onClick={() => { }}>Cancel</Button>
                    <Button hierarchy="primary" onClick={() => { }}>Save</Button>
                </div>
            </Modal.Footer>
        ),
    },
    render: Template,
};

// --- Story 3: Destructive / Warning ---
export const DestructiveState: Story = {
    args: {
        isOpen: true,
        title: 'Mark lead as DNC?',
        paddingVariant: 'large', // Using the 36px padding variant
        children: (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p style={{ margin: 0, color: '#B42318', fontWeight: 700 }}>
                    This will remove the lead from your account. This action cannot be undone.
                </p>

                {/* Mock Radio Group */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        <input type="radio" name="dnc" />
                        <span style={{ fontSize: '14px' }}>Opted out by text</span>
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        <input type="radio" name="dnc" defaultChecked />
                        <span style={{ fontSize: '14px' }}>Opted out by phone</span>
                    </label>
                </div>
            </div>
        ),
        footer: (
            <Modal.Footer alignment="right">
                <Button hierarchy="secondary" onClick={() => { }}>Cancel</Button>
                {/* Using intent="destructive" for red styling if your CSS supports it */}
                <Button hierarchy="primary" intent="destructive" onClick={() => { }}>
                    Yes, mark as DNC
                </Button>
            </Modal.Footer>
        ),
    },
    render: Template,
};

export const CustomWidth: Story = {
    args: {
        isOpen: true,
        title: 'Wide Modal',
        width: '800px',
        children: <p>This modal has a custom width of 800px set via the `width` prop.</p>,
        footer: (
            <Modal.Footer alignment="right">
                <Button hierarchy="primary">Close</Button>
            </Modal.Footer>
        )
    },
    render: Template,
};