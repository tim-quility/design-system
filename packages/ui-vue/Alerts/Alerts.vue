<script setup lang="ts">
import { computed, useSlots } from 'vue';

/* -------------------------------------------------------------------------
   Props
   Defined strictly from "Component API" table
------------------------------------------------------------------------- */
interface Props {
  /**
   * The functional type of the alert
   * @default 'actionable'
   */
  type?: 'actionable' | 'callout';

  /**
   * The semantic status of the alert
   * @default 'error'
   */
  status?: 'error' | 'success' | 'info' | 'warning';

  /**
   * Whether the alert includes a dismiss action
   * @default false
   */
  dismissible?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'actionable',
  status: 'error',
  dismissible: false,
});

const emit = defineEmits<{
  (e: 'dismiss'): void;
}>();

const slots = useSlots();

/* -------------------------------------------------------------------------
   Class Computation
------------------------------------------------------------------------- */
const rootClasses = computed(() => {
  return [
    'ds-alert',
    `ds-alert--type-${props.type}`,
    `ds-alert--status-${props.status}`,
  ];
});
</script>

<template>
  <div :class="rootClasses" role="alert">
    <div class="ds-alert__main">
      <div v-if="slots.icon" class="ds-alert__icon-slot">
        <slot name="icon" />
      </div>
      
      <div class="ds-alert__content">
        <slot />
      </div>
    </div>

    <div v-if="(props.type === 'actionable' && slots.action) || props.dismissible" class="ds-alert__interactive-group">
      
      <div v-if="props.type === 'actionable' && slots.action" class="ds-alert__action-slot">
        <slot name="action" />
      </div>

      <button 
        v-if="props.dismissible"
        type="button" 
        class="ds-alert__dismiss-slot"
        @click="emit('dismiss')"
        aria-label="Dismiss"
      >
        <slot name="dismissIcon" />
      </button>
    </div>
  </div>
</template>

<style scoped src="./alerts.css"></style>