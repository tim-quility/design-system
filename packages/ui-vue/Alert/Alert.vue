<script setup lang="ts">
import { computed } from 'vue';
import './Alert.css';

interface Props {
  /** 'info', 'error', 'success', 'warning' (Defaults to 'info') */
  type?: 'info' | 'error' | 'success' | 'warning';
  /** The header text */
  title: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'info',
});

// Construct class names dynamically based on type
const rootClass = computed(() => `ds-alert ds-alert--${props.type}`);
</script>

<template>
  <div :class="rootClass" role="alert">
    <div class="ds-alert__header">
      <!-- Render icon if provided via slot -->
      <span v-if="$slots.icon" class="ds-alert__icon">
        <slot name="icon"></slot>
      </span>
      {{ title }}
    </div>
    
    <div class="ds-alert__content">
      <slot></slot>
    </div>
  </div>
</template>
