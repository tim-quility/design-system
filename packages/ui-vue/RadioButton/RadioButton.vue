<script setup lang="ts">
import { computed } from 'vue';
import './RadioButton.css';

interface Props {
  label: string;
  description?: string;
  value: string;
  modelValue?: string | number | null;
  hasError?: boolean;
  variant?: 'simple' | 'boxed';
  disabled?: boolean;
  name?: string;
  rotateIconOnCheck?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  hasError: false,
  variant: 'simple',
  disabled: false,
  rotateIconOnCheck: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'change', value: string): void;
}>();

const isChecked = computed(() => props.modelValue === props.value);

const containerClasses = computed(() => {
  return [
    'rb-container',
    `variant-${props.variant}`,
    { 'checked': isChecked.value },
    { 'error': props.hasError },
    { 'disabled': props.disabled },
  ];
});

const handleClick = () => {
  if (!props.disabled) {
    emit('update:modelValue', props.value);
    emit('change', props.value);
  }
};
</script>

<template>
  <label :class="containerClasses" @click.prevent="handleClick">
    <input
      type="radio"
      class="rb-input"
      :checked="isChecked"
      :disabled="disabled"
      :name="name"
      :value="value"
      tabindex="-1" 
    />
    <!-- tabindex -1 to let label handle click/focus if needed, but native radio logic might want normal tabbing. 
         Actually, usually nice to keep input accessible. 
         Let's remove tabindex -1 or handle focus properly. 
         Since we stop propagation on label click sometimes, let's just leave standard behavior:
    -->

    <div class="rb-visual-wrapper">
      <div class="rb-outer-circle"></div>
      <div class="rb-inner-dot"></div>
    </div>

    <div class="rb-content">
      <div class="rb-label">{{ label }}</div>
      <div v-if="description" class="rb-description">{{ description }}</div>
    </div>

    <div 
      v-if="$slots.rightElement" 
      class="rb-right-element"
      :class="{ 'rotate-on-check': isChecked && rotateIconOnCheck }"
    >
      <slot name="rightElement"></slot>
    </div>
  </label>
</template>
