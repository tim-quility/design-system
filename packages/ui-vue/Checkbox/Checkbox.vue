<script setup lang="ts">
import { computed } from 'vue';
import './Checkbox.css';

interface Props {
  /** Label text displayed next to the checkbox */
  label: string;
  /** Optional helper text displayed below the label */
  description?: string;
  /** The value of the checkbox (v-model) */
  modelValue?: boolean;
  /** If true, applies error styling (Red) */
  hasError?: boolean;
  /** 'simple': Transparent background (Default)
   * 'boxed': Adds padding and gray background when selected 
   */
  variant?: 'simple' | 'boxed';
  /** If true, disables interaction */
  disabled?: boolean;
  /** Required name attribute */
  name?: string;
  /** If true, rotates the right element when checked */
  rotateIconOnCheck?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  hasError: false,
  variant: 'simple',
  disabled: false,
  rotateIconOnCheck: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'change', value: boolean): void;
}>();

const isChecked = computed({
  get: () => props.modelValue,
  set: (val) => {
    if (!props.disabled) {
      emit('update:modelValue', val);
      emit('change', val);
    }
  },
});

const containerClasses = computed(() => {
  return [
    'cb-container',
    `variant-${props.variant}`,
    { 'checked': isChecked.value },
    { 'error': props.hasError },
    { 'disabled': props.disabled },
  ];
});

const toggleCheck = () => {
  if (!props.disabled) {
    isChecked.value = !isChecked.value;
  }
};
</script>

<script lang="ts">
import { useSlots } from 'vue';
</script>

<template>
  <label :class="containerClasses">
    <!-- Native Input (Hidden but accessible) -->
    <input
      type="checkbox"
      class="cb-input"
      :disabled="disabled"
      :checked="isChecked"
      :name="name"
      @change="toggleCheck"
      @click.stop
    />

    <!-- Visual Checkbox Square -->
    <div class="cb-visual-wrapper">
      <div class="cb-box">
         <!-- SVG Checkmark -->
         <svg 
            class="cb-checkmark" 
            viewBox="0 0 14 14" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
         >
            <path 
              d="M11.6666 3.5L5.24992 9.91667L2.33325 7" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            />
         </svg>
      </div>
    </div>

    <!-- Text Content -->
    <div class="cb-content">
      <div class="cb-label">{{ label }}</div>
      <div v-if="description" class="cb-description">{{ description }}</div>
    </div>

    <!-- Right Element (Slot) -->
    <div 
      v-if="$slots.rightElement" 
      class="cb-right-element"
      :class="{ 'rotate-on-check': isChecked && rotateIconOnCheck }"
    >
      <slot name="rightElement"></slot>
    </div>
  </label>
</template>
