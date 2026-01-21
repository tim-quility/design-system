<script setup lang="ts">
import { ref, computed, watch, markRaw } from 'vue';
import './Tabs.css';

export interface TabItem {
  id: string;
  label: string;
  content?: any; // Component or string
}

interface Props {
  items: TabItem[];
  variant?: 'line' | 'contained';
  defaultActiveId?: string;
  modelValue?: string; // For v-model support
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'line',
});

const emit = defineEmits<{
  (e: 'update:modelValue', id: string): void;
  (e: 'change', id: string): void;
}>();

const internalActiveId = ref(props.defaultActiveId || (props.items[0] ? props.items[0].id : ''));

const activeTabId = computed({
  get: () => props.modelValue !== undefined ? props.modelValue : internalActiveId.value,
  set: (val) => {
    internalActiveId.value = val;
    emit('update:modelValue', val);
    emit('change', val);
  }
});

const handleTabClick = (id: string) => {
  activeTabId.value = id;
};

// Find active content
// Note: In Vue, slots are often used for content. 
// If 'content' property allows components, we handle it via <component :is> or slots.
// Here we support both: 'items' prop with content, or slots named by tab ID.
const activeItem = computed(() => props.items.find(item => item.id === activeTabId.value));
</script>

<template>
  <div class="tabs-container">
    <!-- Header -->
    <div class="tabs-header" role="tablist" aria-label="Content Navigation">
      <button
        v-for="item in items"
        :key="item.id"
        role="tab"
        :aria-selected="activeTabId === item.id"
        :aria-controls="`panel-${item.id}`"
        :id="`tab-${item.id}`"
        :tabindex="activeTabId === item.id ? 0 : -1"
        class="tab-item"
        :class="[`variant-${variant}`, { active: activeTabId === item.id }]"
        @click="handleTabClick(item.id)"
      >
        <div class="tab-content-wrapper">
          {{ item.label }}
        </div>
      </button>
    </div>

    <!-- Panel -->
    <div
      v-if="activeTabId"
      class="tab-panel"
      role="tabpanel"
      :id="`panel-${activeTabId}`"
      :aria-labelledby="`tab-${activeTabId}`"
    >
      <!-- Slot for specific tab ID -->
      <slot :name="activeTabId">
        <!-- Default: Render content from item prop -->
        <component :is="activeItem?.content" v-if="activeItem?.content && typeof activeItem.content !== 'string'" />
        <div v-else-if="activeItem?.content">{{ activeItem.content }}</div>
      </slot>
    </div>
  </div>
</template>
