import type { Meta, StoryObj } from '@storybook/vue3';
import Modal from './Modal.vue';
import Button from '../Button/Button.vue'; // Assuming Button is already ported

const meta: Meta<typeof Modal> = {
    title: 'UI/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        isOpen: { control: 'boolean' },
        title: { control: 'text' },
        paddingVariant: {
            control: 'select',
            options: ['standard', 'large'],
        },
        width: { control: 'text' },
        onClose: { action: 'close' },
    },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    args: {
        isOpen: true,
        title: 'Standard Modal',
        paddingVariant: 'standard',
    } as any,
    render: (args) => ({
        components: { Modal, Button },
        setup() { return { args }; },
        template: `
      <div style="height: 300px; display: flex; align-items: center; justify-content: center;">
        <p>Click "Open Modal" via controls if closed</p>
        <Modal v-bind="args" @close="args.onClose">
          <p class="modal-text">This is the modal body content. It can contain any arbitrary HTML or Vue components.</p>
          <template #footer>
            <div class="modal-footer align-right">
              <Button hierarchy="secondary" @click="args.onClose">Cancel</Button>
              <Button hierarchy="primary" @click="args.onClose">Confirm</Button>
            </div>
          </template>
        </Modal>
      </div>
    `,
    }),
};

export const LargePadding: Story = {
    args: {
        isOpen: true,
        title: 'Large Padding Modal',
        paddingVariant: 'large',
    } as any,
    render: (args) => ({
        components: { Modal, Button },
        setup() { return { args }; },
        template: `
      <Modal v-bind="args" @close="args.onClose">
        <p class="modal-text">This modal has larger padding (36px).</p>
        <template #footer>
          <div class="modal-footer align-right">
            <Button hierarchy="primary" @click="args.onClose">Okay</Button>
          </div>
        </template>
      </Modal>
    `,
    }),
};

export const CustomWidth: Story = {
    args: {
        isOpen: true,
        title: 'Custom Width',
        width: '400px',
    } as any,
    render: (args) => ({
        components: { Modal, Button },
        setup() { return { args }; },
        template: `
      <Modal v-bind="args" @close="args.onClose">
        <p class="modal-text">This modal has a fixed width of 400px.</p>
        <template #footer>
           <div class="modal-footer align-right">
             <Button hierarchy="primary" @click="args.onClose">Close</Button>
           </div>
        </template>
      </Modal>
    `,
    }),
};

export const DestructiveAction: Story = {
    args: {
        isOpen: true,
        title: 'Delete Item?',
    } as any,
    render: (args) => ({
        components: { Modal, Button },
        setup() { return { args }; },
        template: `
      <Modal v-bind="args" @close="args.onClose">
        <p class="modal-text">Are you sure you want to delete this item? This action cannot be undone.</p>
        <template #footer>
          <div class="modal-footer align-split">
             <Button hierarchy="tertiary">Learn More</Button>
             <div class="modal-footer-group">
                <Button hierarchy="secondary" @click="args.onClose">Cancel</Button>
                <Button hierarchy="primary" intent="destructive" @click="args.onClose">Delete</Button>
             </div>
          </div>
        </template>
      </Modal>
    `,
    }),
};
