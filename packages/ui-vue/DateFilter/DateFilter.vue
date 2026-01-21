<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  isWithinInterval,
  subDays,
  startOfYear,
  isBefore,
} from 'date-fns';
import './DateFilter.css';

export type DateSelectionMode = 'Single' | 'Range';
export type LayoutVariant = 'Sidebar' | 'Simple';

export interface DatePreset {
  label: string;
  value: string;
}

interface Props {
  title?: string;
  variant?: LayoutVariant;
  mode?: DateSelectionMode;
  presets?: DatePreset[];
  initialStartDate?: Date | null;
  initialEndDate?: Date | null;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Select Dates',
  variant: 'Simple',
  mode: 'Range',
  initialStartDate: null,
  initialEndDate: null,
  presets: () => [
    { label: 'Today', value: 'today' },
    { label: 'Last 7 Days', value: '7days' },
    { label: 'Last 30 Days', value: '30days' },
    { label: 'Last 60 Days', value: '60days' },
    { label: 'Last 90 Days', value: '90days' },
    { label: 'YTD', value: 'ytd' },
    { label: 'All', value: 'all' },
  ],
});

const emit = defineEmits<{
  (e: 'cancel'): void;
  (e: 'apply', startDate: Date | null, endDate: Date | null): void;
}>();

// State
const currentMonth = ref<Date>(new Date());
const startDate = ref<Date | null>(props.initialStartDate);
const endDate = ref<Date | null>(props.initialEndDate);
const selectedPreset = ref<string>('');

// Navigation
const nextMonth = () => {
  currentMonth.value = addMonths(currentMonth.value, 1);
};
const prevMonth = () => {
  currentMonth.value = subMonths(currentMonth.value, 1);
};

// Date Selection Logic
const handleDateClick = (day: Date) => {
  selectedPreset.value = 'custom';

  if (props.mode === 'Single') {
    startDate.value = day;
    endDate.value = day;
    return;
  }

  // Range Logic
  if (!startDate.value || (startDate.value && endDate.value)) {
    // Start a new range
    startDate.value = day;
    endDate.value = null;
  } else if (startDate.value && !endDate.value) {
    // Completing the range
    if (isBefore(day, startDate.value)) {
      startDate.value = day;
      endDate.value = startDate.value;
    } else {
      endDate.value = day;
    }
  }
};

const handlePresetClick = (presetValue: string) => {
  selectedPreset.value = presetValue;
  const today = new Date();

  let newStart: Date | null = null;
  let newEnd: Date = today;

  switch (presetValue) {
    case 'today':
      newStart = today;
      break;
    case '7days':
      newStart = subDays(today, 7);
      break;
    case '30days':
      newStart = subDays(today, 30);
      break;
    case '60days':
      newStart = subDays(today, 60);
      break;
    case '90days':
      newStart = subDays(today, 90);
      break;
    case 'ytd':
      newStart = startOfYear(today);
      break;
    case 'all':
      newStart = new Date(2000, 0, 1);
      break;
    default:
      break;
  }

  if (newStart) {
    startDate.value = newStart;
    endDate.value = newEnd;
    currentMonth.value = newEnd;
  }
};

// Calendar Grid Generation
const calendarRows = computed(() => {
  const monthStart = startOfMonth(currentMonth.value);
  const monthEnd = endOfMonth(monthStart);
  const startDateGrid = startOfWeek(monthStart);
  const endDateGrid = endOfWeek(monthEnd);

  const rows: Date[][] = [];
  let days: Date[] = [];
  let day = startDateGrid;

  while (day <= endDateGrid) {
    for (let i = 0; i < 7; i++) {
      days.push(day);
      day = addDays(day, 1);
    }
    rows.push(days);
    days = [];
  }
  return rows;
});

const getDayClass = (day: Date) => {
  const monthStart = startOfMonth(currentMonth.value);
  const isCurrentMonth = isSameMonth(day, monthStart);
  const isToday = isSameDay(day, new Date());
  const isSelectedStart = startDate.value ? isSameDay(day, startDate.value) : false;
  const isSelectedEnd = endDate.value ? isSameDay(day, endDate.value) : false;
  
  const isInRange = (startDate.value && endDate.value && props.mode === 'Range')
    ? isWithinInterval(day, { start: startDate.value, end: endDate.value })
    : false;

  const classes = ['df-day-cell'];
  if (!isCurrentMonth) classes.push('df-day-cell--disabled');
  if (isToday) classes.push('df-day-cell--today');
  if (isInRange) classes.push('df-day-cell--range');
  if (isSelectedStart) classes.push('df-day-cell--selected', 'df-day-cell--range-start');
  if (isSelectedEnd) classes.push('df-day-cell--selected', 'df-day-cell--range-end');

  return classes.join(' ');
};

const formatDate = (date: Date | null) => {
  return date ? format(date, 'MM/dd/yyyy') : 'MM/DD/YYYY';
};

const cancel = () => emit('cancel');
const apply = () => emit('apply', startDate.value, endDate.value);
</script>

<template>
  <div class="df-container">
    <div class="df-body">
      <!-- SIDEBAR -->
      <div v-if="variant === 'Sidebar'" class="df-sidebar">
        <div class="df-sidebar__header">{{ title }}</div>

        <div
          v-for="preset in presets"
          :key="preset.value"
          class="df-sidebar__item"
          :class="{ selected: selectedPreset === preset.value }"
          @click="handlePresetClick(preset.value)"
        >
          <div class="df-radio">
            <div v-if="selectedPreset === preset.value" class="df-radio__dot"></div>
          </div>
          <span class="df-sidebar__label">{{ preset.label }}</span>
        </div>

        <div
          class="df-sidebar__item"
          :class="{ selected: selectedPreset === 'custom' }"
          @click="selectedPreset = 'custom'"
        >
          <div class="df-radio">
             <div v-if="selectedPreset === 'custom'" class="df-radio__dot"></div>
          </div>
          <span class="df-sidebar__label">
            {{ mode === 'Single' ? 'Custom Date' : 'Custom Date Range' }}
          </span>
        </div>
      </div>

      <!-- MAIN CONTENT -->
      <div class="df-content">
        <div v-if="variant === 'Simple'" class="df-content__header">{{ title }}</div>

        <!-- Inputs -->
        <div class="df-inputs">
          <template v-if="mode === 'Range'">
            <div class="df-input-group">
              <div class="df-input-label">Start Date <span>*</span></div>
              <div class="df-input-box">
                <span>{{ formatDate(startDate) }}</span>
                <!-- Calendar Icon -->
                <div style="width: 12px; height: 12px; border: 2px solid #707070; border-radius: 1px;"></div>
              </div>
            </div>
            <div class="df-separator">–</div>
            <div class="df-input-group">
              <div class="df-input-label">End Date <span>*</span></div>
              <div class="df-input-box">
                <span>{{ formatDate(endDate) }}</span>
                <!-- Calendar Icon -->
                <div style="width: 12px; height: 12px; border: 2px solid #707070; border-radius: 1px;"></div>
              </div>
            </div>
          </template>
          <template v-else>
             <div class="df-input-group">
              <div class="df-input-label">Select Date <span>*</span></div>
              <div class="df-input-box">
                <span>{{ formatDate(startDate) }}</span>
                <!-- Calendar Icon -->
                <div style="width: 12px; height: 12px; border: 2px solid #707070; border-radius: 1px;"></div>
              </div>
            </div>
          </template>
        </div>

        <!-- Navigation -->
        <div class="df-month-nav">
          <div class="df-month-nav__arrow" @click="prevMonth">
            <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
              <path d="M5 1L1 6L5 11" stroke="#2F2F2F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div class="df-month-nav__title">
            {{ format(currentMonth, 'MMMM yyyy') }}
          </div>
          <div class="df-month-nav__arrow" @click="nextMonth">
             <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
              <path d="M1 1L5 6L1 11" stroke="#2F2F2F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
             </svg>
          </div>
        </div>

        <!-- Grid -->
        <div class="df-calendar">
          <div class="df-calendar__row">
            <div v-for="d in ['S','M','T','W','T','F','S']" :key="d" class="df-day-cell df-day-cell--header">
              {{ d }}
            </div>
          </div>
          <div v-for="(week, wIndex) in calendarRows" :key="wIndex" class="df-calendar__row">
            <div
              v-for="day in week"
              :key="day.toString()"
              :class="getDayClass(day)"
              @click="handleDateClick(day)"
            >
              <div class="df-day-content">{{ format(day, 'd') }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <div class="df-footer">
      <button type="button" class="df-btn df-btn--secondary" @click="cancel">
        Cancel
      </button>
      <button
        type="button"
        class="df-btn df-btn--primary"
        @click="apply"
        :disabled="!startDate || (mode === 'Range' && !endDate)"
        :class="{ 'df-btn--disabled': !startDate || (mode === 'Range' && !endDate) }"
      >
        Apply Filter
      </button>
    </div>
  </div>
</template>
