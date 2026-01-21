<script setup lang="ts">
import { computed } from 'vue';
import './Toggle.css';

interface Props {
  modelValue?: boolean;
  label?: string;
  disabled?: boolean;
  showStateLabel?: boolean;
  isError?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  showStateLabel: false,
  disabled: false,
  isError: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', checked: boolean): void;
  (e: 'change', checked: boolean): void;
}>();

const handleClick = () => {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue);
    emit('change', !props.modelValue);
  }
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    handleClick();
  }
};

const switchClasses = computed(() => {
  return [
    'toggle-switch',
    { 'is-checked': props.modelValue },
    { 'is-error': props.isError },
  ];
});
</script>

<template>
  <div class="toggle-root">
    <!-- Optional Top Label -->
    <div v-if="label" class="toggle-main-label">{{ label }}</div>

    <div class="toggle-row">
      <!-- The Switch Button -->
      <button
        type="button"
        role="switch"
        :aria-checked="modelValue"
        :aria-label="label || 'Toggle'"
        :disabled="disabled"
        :class="switchClasses"
        @click="handleClick"
        @keydown="handleKeyDown"
      >
        <div class="toggle-thumb"></div>
      </button>

      <!-- Optional Side Text -->
      <div v-if="showStateLabel" class="toggle-side-text">
        {{ modelValue ? 'On' : 'Off' }}
      </div>
    </div>
  </div>
</template>
