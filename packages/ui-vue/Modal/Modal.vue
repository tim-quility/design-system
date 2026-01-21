<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue';
import './Modal.css';

interface Props {
  isOpen: boolean;
  title: string;
  paddingVariant?: 'standard' | 'large';
  width?: string | number;
}

const props = withDefaults(defineProps<Props>(), {
  paddingVariant: 'standard',
});

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const close = () => {
  emit('close');
};

const handleKeydown = (e: KeyboardEvent) => {
  if (props.isOpen && e.key === 'Escape') {
    close();
  }
};

// Lock body scroll
watch(() => props.isOpen, (isOpen) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }
});

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeydown);
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', handleKeydown);
    document.body.style.overflow = '';
  }
});
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="modal-overlay" @click="close">
      <div
        class="modal-container"
        :class="[`padding-${paddingVariant}`]"
        :style="{ width: typeof width === 'number' ? `${width}px` : width }"
        @click.stop
      >
        <!-- Header -->
        <div class="modal-header">
          <div class="modal-title">{{ title }}</div>
          <button class="modal-close-btn" @click="close" aria-label="Close modal">
            <div class="modal-close-icon"></div>
          </button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <slot></slot>
        </div>

        <!-- Footer -->
        <div v-if="$slots.footer" class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>
