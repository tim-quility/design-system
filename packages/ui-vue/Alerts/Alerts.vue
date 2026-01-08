<script setup lang="ts">
import { computed, useSlots } from 'vue';
import './alerts.css';

// 1. Component API Definition
interface Props {
  /**
   * The device context for responsive layout
   * @default 'Mobile'
   */
  device?: 'Mobile' | 'Desktop';

  /**
   * The functional type of the alert
   * @default 'Actionable'
   */
  type?: 'Actionable' | 'Callout';

  /**
   * The semantic status of the alert
   * @default 'Error'
   */
  status?: 'Error' | 'Success' | 'Info' | 'Warning';

  /**
   * Whether the alert includes a dismiss action
   * @default false
   */
  dismissible?: boolean;

  /**
   * Text label for the action button.
   * Only rendered if type is 'Actionable'.
   */
  action?: string;
}

const props = withDefaults(defineProps<Props>(), {
  device: 'Mobile',
  type: 'Actionable',
  status: 'Error',
  dismissible: false,
  action: undefined,
});

// Event definitions
const emit = defineEmits<{
  (e: 'action'): void;
  (e: 'dismiss'): void;
}>();

const slots = useSlots();

// Generate BEM classes based on props
const rootClasses = computed(() => {
  return [
    'ds-alert',
    `ds-alert--${props.device.toLowerCase()}`,
    `ds-alert--${props.type.toLowerCase()}`,
    `ds-alert--${props.status.toLowerCase()}`,
  ].join(' ');
});

const showInteractiveGroup = computed(() => {
  return (props.type === 'Actionable' && props.action) || props.dismissible;
});
</script>

<template>
  <div :class="rootClasses" role="alert">
    <div class="ds-alert__main">
      <div v-if="slots.icon" class="ds-alert__icon-slot">
        <slot name="icon"></slot>
      </div>
      
      <div class="ds-alert__content">
        <slot></slot>
      </div>
    </div>

    <div v-if="showInteractiveGroup" class="ds-alert__interactive-group">
      
      <button 
        v-if="type === 'Actionable' && action" 
        class="ds-alert__action-slot" 
        type="button"
        @click="emit('action')"
      >
        {{ action }}
      </button>

      <button 
        v-if="dismissible" 
        class="ds-alert__dismiss-slot" 
        type="button"
        aria-label="Dismiss"
        @click="emit('dismiss')"
      >
        <svg 
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M9 3L3 9M3 3L9 9" 
            stroke="currentColor" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>