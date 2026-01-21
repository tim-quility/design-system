<script setup lang="ts">
import { computed } from 'vue';
import './Card.css';

interface Props {
  title: string;
  description: string;
  /** Duration text (e.g. "1 hour") */
  duration?: string;
  /** Type/Label text (e.g. "Certification") */
  typeLabel?: string;
  /** Optional click handler or check event emission */
  clickable?: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'click'): void;
}>();

const slots = useSlots();

// Computed property to check if slots exist
const hasTopRightIcon = computed(() => !!slots.topRightIcon);
const hasDurationIcon = computed(() => !!slots.durationIcon);
const hasTypeIcon = computed(() => !!slots.typeIcon);

const handleClick = () => {
  if (props.clickable) {
    emit('click');
  }
};

const handleKeyDown = (e: KeyboardEvent) => {
  if (props.clickable && e.key === 'Enter') {
    emit('click');
  }
};
</script>

<script lang="ts">
import { useSlots } from 'vue';
</script>

<template>
  <div
    class="card-container"
    :class="{ 'is-interactive': clickable }"
    :role="clickable ? 'button' : undefined"
    :tabindex="clickable ? 0 : undefined"
    @click="handleClick"
    @keydown="handleKeyDown"
  >
    <div class="card-body">
      <!-- Header: Title + Top Icon -->
      <div class="card-header">
        <div class="card-title">{{ title }}</div>
        <div v-if="hasTopRightIcon" class="card-top-icon">
          <slot name="topRightIcon"></slot>
        </div>
      </div>

      <!-- Description -->
      <div class="card-description">
        {{ description }}
      </div>
    </div>

    <!-- Footer: Metadata -->
    <div class="card-footer">
      <!-- Duration Meta Item -->
      <div v-if="duration" class="meta-item">
        <div v-if="hasDurationIcon" class="meta-icon-wrapper">
          <slot name="durationIcon"></slot>
        </div>
        <div class="meta-text">{{ duration }}</div>
      </div>

      <!-- Type/Label Meta Item -->
      <div v-if="typeLabel" class="meta-item">
        <div v-if="hasTypeIcon" class="meta-icon-wrapper">
          <slot name="typeIcon"></slot>
        </div>
        <div class="meta-text">{{ typeLabel }}</div>
      </div>
    </div>
  </div>
</template>
