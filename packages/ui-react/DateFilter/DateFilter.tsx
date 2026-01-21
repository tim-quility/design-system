import React, { useState, useEffect } from 'react';
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
  isAfter,
  isBefore,
  isValid
} from 'date-fns';
import './DateFilter.css';

// --- Types ---
export type DateSelectionMode = 'Single' | 'Range';
export type LayoutVariant = 'Sidebar' | 'Simple';

export interface DatePreset {
  label: string;
  value: string;
}

export interface DateFilterProps {
  title?: string;
  variant?: LayoutVariant;
  mode?: DateSelectionMode;
  presets?: DatePreset[];
  /** Callback for Cancel button */
  onCancel?: () => void;
  /** Callback for Apply button with selected dates */
  onApply?: (startDate: Date | null, endDate: Date | null) => void;
  /** Optional initial start date */
  initialStartDate?: Date;
  /** Optional initial end date */
  initialEndDate?: Date;
}

// --- Icons ---
const ChevronLeft = () => (
  <svg width="6" height="12" viewBox="0 0 6 12" fill="none" style={{ cursor: 'pointer' }}>
    <path d="M5 1L1 6L5 11" stroke="#2F2F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ChevronRight = () => (
  <svg width="6" height="12" viewBox="0 0 6 12" fill="none" style={{ cursor: 'pointer' }}>
    <path d="M1 1L5 6L1 11" stroke="#2F2F2F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const CalendarIcon = () => (
  <div style={{ width: 12, height: 12, border: '2px solid #707070', borderRadius: 1 }} />
);

// --- Component ---
const DateFilter: React.FC<DateFilterProps> = ({
  title = 'Select Dates',
  variant = 'Simple',
  mode = 'Range',
  initialStartDate = null,
  initialEndDate = null,
  presets = [
    { label: 'Today', value: 'today' },
    { label: 'Last 7 Days', value: '7days' },
    { label: 'Last 30 Days', value: '30days' },
    { label: 'Last 60 Days', value: '60days' },
    { label: 'Last 90 Days', value: '90days' },
    { label: 'YTD', value: 'ytd' },
    { label: 'All', value: 'all' },
  ],
  onCancel,
  onApply,
}) => {
  // State for the currently visible month in the calendar
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  // State for selected dates
  const [startDate, setStartDate] = useState<Date | null>(initialStartDate);
  const [endDate, setEndDate] = useState<Date | null>(initialEndDate);

  // State for active preset highlighting
  const [selectedPreset, setSelectedPreset] = useState<string>('');

  // --- Logic: Navigation ---
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  // --- Logic: Date Selection ---
  const handleDateClick = (day: Date) => {
    // If clicking a date, we are entering custom mode
    setSelectedPreset('custom');

    if (mode === 'Single') {
      setStartDate(day);
      setEndDate(day); // For consistency, single mode sets both or just ignores end
      return;
    }

    // Range Logic
    if (!startDate || (startDate && endDate)) {
      // Start a new range
      setStartDate(day);
      setEndDate(null);
    } else if (startDate && !endDate) {
      // Completing the range
      if (isBefore(day, startDate)) {
        // User clicked a date before the start date, swap them
        setStartDate(day);
        setEndDate(startDate);
      } else {
        setEndDate(day);
      }
    }
  };

  // --- Logic: Preset Selection ---
  const handlePresetClick = (presetValue: string) => {
    setSelectedPreset(presetValue);
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
        // specific logic for 'all' depends on your data, setting to null or a far past date
        newStart = new Date(2000, 0, 1);
        break;
      default:
        break;
    }

    if (newStart) {
      setStartDate(newStart);
      setEndDate(newEnd);
      // Move calendar view to the end date so user sees selection
      setCurrentMonth(newEnd);
    }
  };

  // --- Logic: Grid Generation ---
  const renderCalendarGrid = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDateGrid = startOfWeek(monthStart); // Defaults to Sunday start
    const endDateGrid = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDateGrid;
    let formattedDate = '';

    while (day <= endDateGrid) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd');
        const cloneDay = day;

        // --- Class Name Logic ---
        const isCurrentMonth = isSameMonth(day, monthStart);
        const isToday = isSameDay(day, new Date());

        const isSelectedStart = startDate ? isSameDay(day, startDate) : false;
        const isSelectedEnd = endDate ? isSameDay(day, endDate) : false;

        // Check if inside range (only if both start and end exist)
        const isInRange = (startDate && endDate && mode === 'Range')
          ? isWithinInterval(day, { start: startDate, end: endDate })
          : false;

        // Base class
        let cellClass = 'df-day-cell';
        if (!isCurrentMonth) cellClass += ' df-day-cell--disabled'; // Optional: style for outside month
        if (isToday) cellClass += ' df-day-cell--today';

        // Range classes
        if (isInRange) cellClass += ' df-day-cell--range';
        if (isSelectedStart) cellClass += ' df-day-cell--selected df-day-cell--range-start';
        if (isSelectedEnd) cellClass += ' df-day-cell--selected df-day-cell--range-end';

        days.push(
          <div
            key={day.toString()}
            className={cellClass}
            onClick={() => handleDateClick(cloneDay)}
          >
            <div className="df-day-content">{formattedDate}</div>
          </div>
        );

        day = addDays(day, 1);
      }
      rows.push(<div className="df-calendar__row" key={day.toString()}>{days}</div>);
      days = [];
    }
    return rows;
  };

  // Helper to render the radio circle
  const renderRadio = (isSelected: boolean) => (
    <div className="df-radio">
      {isSelected && <div className="df-radio__dot" />}
    </div>
  );

  return (
    <div className="df-container">
      <div className="df-body">

        {/* --- LEFT SIDEBAR (Optional) --- */}
        {variant === 'Sidebar' && (
          <div className="df-sidebar">
            <div className="df-sidebar__header">{title}</div>

            {presets.map((preset) => (
              <div
                key={preset.value}
                className={`df-sidebar__item ${selectedPreset === preset.value ? 'selected' : ''}`}
                onClick={() => handlePresetClick(preset.value)}
              >
                {renderRadio(selectedPreset === preset.value)}
                <span className="df-sidebar__label">{preset.label}</span>
              </div>
            ))}

            <div
              className={`df-sidebar__item ${selectedPreset === 'custom' ? 'selected' : ''}`}
              onClick={() => setSelectedPreset('custom')}
            >
              {renderRadio(selectedPreset === 'custom')}
              <span className="df-sidebar__label">
                {mode === 'Single' ? 'Custom Date' : 'Custom Date Range'}
              </span>
            </div>
          </div>
        )}

        {/* --- RIGHT CONTENT (Calendar) --- */}
        <div className="df-content">
          {variant === 'Simple' && (
            <div className="df-content__header">{title}</div>
          )}

          {/* Input Fields - Populated with actual State */}
          <div className="df-inputs">
            {mode === 'Range' ? (
              <>
                <div className="df-input-group">
                  <div className="df-input-label">Start Date <span>*</span></div>
                  <div className="df-input-box">
                    <span>{startDate ? format(startDate, 'MM/dd/yyyy') : 'MM/DD/YYYY'}</span>
                    <CalendarIcon />
                  </div>
                </div>
                <div className="df-separator">–</div>
                <div className="df-input-group">
                  <div className="df-input-label">End Date <span>*</span></div>
                  <div className="df-input-box">
                    <span>{endDate ? format(endDate, 'MM/dd/yyyy') : 'MM/DD/YYYY'}</span>
                    <CalendarIcon />
                  </div>
                </div>
              </>
            ) : (
              <div className="df-input-group">
                <div className="df-input-label">Select Date <span>*</span></div>
                <div className="df-input-box">
                  <span>{startDate ? format(startDate, 'MM/dd/yyyy') : 'MM/DD/YYYY'}</span>
                  <CalendarIcon />
                </div>
              </div>
            )}
          </div>

          {/* Month Navigation */}
          <div className="df-month-nav">
            <div className="df-month-nav__arrow" onClick={prevMonth}>
              <ChevronLeft />
            </div>
            <div className="df-month-nav__title">
              {format(currentMonth, 'MMMM yyyy')}
            </div>
            <div className="df-month-nav__arrow" onClick={nextMonth}>
              <ChevronRight />
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="df-calendar">
            <div className="df-calendar__row">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                <div key={i} className="df-day-cell df-day-cell--header">{day}</div>
              ))}
            </div>
            {renderCalendarGrid()}
          </div>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <div className="df-footer">
        <button type="button" className="df-btn df-btn--secondary" onClick={onCancel}>
          Cancel
        </button>
        <button
          type="button"
          className="df-btn df-btn--primary"
          onClick={() => onApply && onApply(startDate, endDate)}
          disabled={!startDate || (mode === 'Range' && !endDate)}
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default DateFilter;