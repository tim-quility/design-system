<script setup lang="ts">
import { ref, computed } from 'vue';
import './TextField.css';

interface Props {
  modelValue?: string | number;
  label: string;
  hint?: string;
  error?: boolean | string;
  prefix?: string;
  suffix?: string;
  multiline?: boolean;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  type?: string;
  placeholder?: string;
  name?: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  multiline: false,
  required: false,
  disabled: false,
  readOnly: false,
  type: 'text',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
}>();

const isFocused = ref(false);

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement | HTMLTextAreaElement;
  emit('update:modelValue', target.value);
};

const handleFocus = (e: FocusEvent) => {
  if (props.disabled || props.readOnly) return;
  isFocused.value = true;
  emit('focus', e);
};

const handleBlur = (e: FocusEvent) => {
  isFocused.value = false;
  emit('blur', e);
};

const displayHint = computed(() => {
  if (typeof props.error === 'string') return props.error;
  return props.hint;
});

const isError = computed(() => !!props.error);

const wrapperClasses = computed(() => {
  return [
    'tf-wrapper',
    { 'is-focused': isFocused.value },
    { 'is-error': isError.value },
    { 'is-disabled': props.disabled },
    { 'is-readonly': props.readOnly },
  ];
});
</script>

<template>
  <div class="tf-container">
    <div class="tf-label-row">
      <span class="tf-label">{{ label }}</span>
      <span v-if="required" class="tf-required">*</span>
      <div class="tf-info-icon" title="More Information">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <rect x="0.5" y="0.5" width="13" height="13" rx="6.5" stroke="#1849A9" />
          <path d="M7 6.333V10.333" stroke="#1849A9" stroke-width="1.5" stroke-linecap="round" />
          <circle cx="7" cy="3.666" r="1" fill="#1849A9" />
        </svg>
      </div>
    </div>

    <div :class="wrapperClasses">
      <div v-if="prefix || $slots.prefix" class="tf-affix">
        <slot name="prefix">{{ prefix }}</slot>
      </div>

      <template v-if="multiline">
        <textarea
          class="tf-input"
          :value="modelValue"
          :disabled="disabled"
          :readonly="readOnly"
          :required="required"
          :placeholder="placeholder"
          :name="name"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
        ></textarea>
      </template>
      <template v-else>
        <input
          class="tf-input"
          :type="type"
          :value="modelValue"
          :disabled="disabled"
          :readonly="readOnly"
          :required="required"
          :placeholder="placeholder"
          :name="name"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
        />
      </template>

      <div v-if="suffix || $slots.suffix" class="tf-affix is-bold">
        <slot name="suffix">{{ suffix }}</slot>
      </div>

      <div v-if="isError && !disabled && !readOnly" class="tf-icon-box">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333Z" stroke="#B42318" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10 6.66666V10" stroke="#B42318" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M10 13.3333H10.0083" stroke="#B42318" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>

      <div v-if="multiline && !disabled && !readOnly" class="tf-resize-handle">
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <path d="M10 1L10 10L1 10" stroke="#2F2F2F" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </div>
    </div>

    <div v-if="displayHint" class="tf-helper-text" :class="{ 'is-error': isError }">
      {{ displayHint }}
    </div>
  </div>
</template>
