<script setup lang="ts">
import { computed } from 'vue';
import './HorizontalStepper.css';

interface Step {
  id: string;
  name: string;
  description: string;
}

interface Props {
  steps: Step[];
  currentStepId: string;
  className?: string;
}

const props = withDefaults(defineProps<Props>(), {
  className: '',
});

const currentStepIndex = computed(() => {
  return props.steps.findIndex(s => s.id === props.currentStepId);
});

const getStatus = (index: number) => {
  if (index < currentStepIndex.value) return 'complete';
  if (index === currentStepIndex.value) return 'current';
  return 'upcoming';
};
</script>

<template>
  <div class="hs-container" :class="className">
    <div class="hs-wrapper">
      <div
        v-for="(step, index) in steps"
        :key="step.id"
        class="hs-step-item"
        :data-status="getStatus(index)"
      >
        <!-- Top Progress Bar -->
        <div class="hs-bar"></div>

        <!-- Text Content -->
        <div class="hs-content">
          <!-- Label Row -->
          <div class="hs-label-row">
            <div class="hs-indicator-slot">
              <template v-if="getStatus(index) === 'complete'">
                 <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 4.5L6.5 11L3 7.5" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
              </template>
              <template v-else-if="getStatus(index) === 'current'">
                <div class="hs-dot-active"></div>
              </template>
              <template v-else>
                <div class="hs-dot-empty"></div>
              </template>
            </div>
            <span class="hs-label">{{ step.name }}</span>
          </div>

          <!-- Description Row -->
          <div class="hs-description-row">
            <span class="hs-description">{{ step.description }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
