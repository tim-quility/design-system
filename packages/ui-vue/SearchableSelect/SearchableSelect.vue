<script setup lang="ts">
import { ref, computed, watch, nextTick, type PropType, onMounted, onUnmounted } from 'vue';
import Icon from '../icon/Icon.vue';
import './SearchableSelect.css';

export interface Option {
  label: string;
  value: string | number;
  disabled?: boolean;
  tooltip?: string;
  [key: string]: any;
}

const props = defineProps({
  options: {
    type: Array as PropType<Option[]>,
    default: () => [],
  },
  modelValue: {
    type: [String, Number] as PropType<string | number | null>,
    default: null,
  },
  placeholder: {
    type: String,
    default: 'Select...',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  disableSearch: {
    type: Boolean,
    default: false,
  },
  selectedItemClassName: {
    type: String,
    default: '',
  },
  disabledTooltip: {
    type: String,
    default: 'This option is disabled',
  },
  onOptionDelete: {
    type: Function as PropType<(value: string | number) => void>,
    default: undefined
  }
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
  (e: 'change', value: string | number): void;
  (e: 'delete', value: string | number): void;
}>();

const isOpen = ref(false);
const searchTerm = ref('');
const coords = ref({ top: 0, left: 0, width: 0 });
const wrapperRef = ref<HTMLElement | null>(null);
const dropdownRef = ref<HTMLElement | null>(null);
const inputRef = ref<HTMLInputElement | null>(null);

const filteredOptions = computed(() => {
  if (!searchTerm.value || props.disableSearch) return props.options;
  return props.options.filter(opt =>
    opt.label.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

const selectedOption = computed(() => props.options.find(o => o.value === props.modelValue));

const toggleOpen = () => {
  if (props.disabled) return;

  if (!isOpen.value && wrapperRef.value) {
    const rect = wrapperRef.value.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollLeft = window.scrollX || document.documentElement.scrollLeft;

    coords.value = {
      top: rect.bottom + scrollTop + 4,
      left: rect.left + scrollLeft,
      width: rect.width,
    };
    isOpen.value = true;
    
    if (!props.disableSearch) {
      nextTick(() => {
        setTimeout(() => {
           inputRef.value?.focus();
        }, 50);
      });
    }
  } else {
    isOpen.value = false;
  }
};

const handleSelect = (val: string | number) => {
  emit('update:modelValue', val);
  emit('change', val);
  isOpen.value = false;
  searchTerm.value = '';
};

const handleClear = (e: MouseEvent) => {
  e.stopPropagation();
  emit('update:modelValue', '');
  emit('change', '');
  isOpen.value = false;
};

// Click Outside
const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as Node;
  if (
    isOpen.value &&
    wrapperRef.value &&
    !wrapperRef.value.contains(target) &&
    dropdownRef.value &&
    !dropdownRef.value.contains(target)
  ) {
    isOpen.value = false;
    searchTerm.value = '';
  }
};

const handleScrollOrResize = (e: Event) => {
  if (!isOpen.value) return;
  if (dropdownRef.value && dropdownRef.value.contains(e.target as Node)) {
      return; 
  }
  isOpen.value = false;
};

onMounted(() => {
  if (typeof document !== 'undefined') {
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScrollOrResize, true);
    window.addEventListener('resize', handleScrollOrResize);
  }
});

onUnmounted(() => {
  if (typeof document !== 'undefined') {
    document.removeEventListener('mousedown', handleClickOutside);
    window.removeEventListener('scroll', handleScrollOrResize, true);
    window.removeEventListener('resize', handleScrollOrResize);
  }
});
</script>

<template>
  <div class="ss-wrapper" ref="wrapperRef">
    <!-- Trigger -->
    <div
      class="ss-trigger"
      :class="{ 'is-disabled': disabled }"
      @click="toggleOpen"
      :tabindex="disabled ? -1 : 0"
    >
      <span class="ss-trigger__label">
        <template v-if="selectedOption">
          <span class="ss-trigger__text-selected">{{ selectedOption.label }}</span>
        </template>
        <template v-else>
          <span class="ss-trigger__placeholder">{{ placeholder }}</span>
        </template>
      </span>

      <div class="ss-trigger__actions">
        <button
          v-if="modelValue && !disabled"
          class="ss-action-btn"
          title="Clear selection"
          type="button"
          @click="handleClear"
        >
          <Icon name="x-close-q" :size="14" />
        </button>
        <div class="ss-arrow" :class="{ 'is-open': isOpen }">
          <Icon name="chevron-down" :size="16" />
        </div>
      </div>
    </div>

    <!-- Dropdown Portal -->
    <Teleport to="body">
      <div
        v-if="isOpen"
        ref="dropdownRef"
        class="ss-dropdown"
        :style="{
          position: 'absolute',
          top: `${coords.top}px`,
          left: `${coords.left}px`,
          width: `${coords.width}px`,
          zIndex: 9999
        }"
      >
        <!-- Search Input -->
        <div v-if="!disableSearch" class="ss-search-container">
          <div class="ss-search-wrapper">
            <span class="ss-search-icon">
              <Icon name="q-search" :size="14" />
            </span>
            <input
              ref="inputRef"
              type="text"
              class="ss-search-input"
              placeholder="Search..."
              v-model="searchTerm"
              @click.stop
            />
          </div>
        </div>

        <!-- Options List -->
        <div class="ss-list">
          <template v-if="filteredOptions.length > 0">
            <div
              v-for="opt in filteredOptions"
              :key="opt.value"
              class="ss-option"
              :class="{
                'is-selected': opt.value === modelValue,
                'is-disabled': opt.disabled,
                [selectedItemClassName]: opt.value === modelValue && selectedItemClassName
              }"
              :title="opt.tooltip || (opt.disabled ? disabledTooltip : '')"
              @click="!opt.disabled && handleSelect(opt.value)"
            >
              <span class="ss-option__label">{{ opt.label }}</span>
            </div>
          </template>
          <template v-else>
            <div class="ss-no-results">No matching options found</div>
          </template>
        </div>
      </div>
    </Teleport>
  </div>
</template>
