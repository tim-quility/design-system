<script setup lang="ts">
import { computed } from 'vue';
import './Button.css';

interface Props {
  /** 'primary', 'secondary', 'tertiary' */
  hierarchy?: 'primary' | 'secondary' | 'tertiary';
  /** 'sm', 'md', 'lg' */
  size?: 'sm' | 'md' | 'lg';
  /** 'default', 'destructive' */
  intent?: 'default' | 'destructive';
  /** If true, shows a spinner and disables the button */
  isLoading?: boolean;
  /** Standard disabled prop */
  disabled?: boolean;
  /** Accessible label, required for icon-only buttons */
  ariaLabel?: string;
  /** Positioning of the icon relative to the label: 'start' (default), 'end' */
  iconPosition?: 'start' | 'end';
  type?: 'button' | 'submit' | 'reset';
}

const props = withDefaults(defineProps<Props>(), {
  hierarchy: 'primary',
  size: 'md',
  intent: 'default',
  isLoading: false,
  disabled: false,
  iconPosition: 'start',
  type: 'button',
});

const slots = useSlots();

const hasIcon = computed(() => !!slots.icon);
const hasLabel = computed(() => !!slots.default);
const isIconOnly = computed(() => hasIcon.value && !hasLabel.value);

const classes = computed(() => {
  const result = [
    'ds-button',
    `ds-button--${props.hierarchy}`,
    `ds-button--${props.size}`,
    `ds-button--${props.intent}`,
  ];

  if (props.isLoading) {
    result.push('ds-button--loading');
  } else if (props.disabled) {
    result.push('ds-button--disabled');
  }

  if (hasIcon.value) {
    result.push(`ds-button--icon-${props.iconPosition}`);
  }

  if (isIconOnly.value) {
    result.push('ds-button--icon-only');
  }

  return result.join(' ');
});

const finalAriaLabel = computed(() => {
  if (isIconOnly.value && !props.ariaLabel) {
    console.warn('[Button] Icon-only button should have an aria-label.');
  }
  return props.ariaLabel;
});
</script>

<script lang="ts">
// Standard Vue 3 way to access slots in script setup is useSlots, importing it implicitly usually or explicit
import { useSlots } from 'vue';
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || isLoading"
    :class="classes"
    :aria-label="finalAriaLabel"
    :aria-busy="isLoading"
  >
    <template v-if="isLoading">
      <span class="ds-button__spinner" aria-hidden="true">
        ⟳
      </span>
      <span v-if="hasLabel" style="visibility: hidden">
        <slot></slot>
      </span>
    </template>

    <template v-else>
      <span v-if="hasIcon" class="ds-button__icon">
        <slot name="icon"></slot>
      </span>
      <span v-if="hasLabel" class="ds-button__label">
        <slot></slot>
      </span>
    </template>
  </button>
</template>
