import React, { InputHTMLAttributes, ReactNode } from 'react';
import './RadioButton.css';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Label text displayed next to the radio */
  label: ReactNode;
  /** Optional helper text displayed below the label */
  description?: string;
  /** If true, applies error styling (Red) */
  hasError?: boolean;
  /** * 'simple': Transparent background (Default)
   * 'boxed': Adds padding and gray background when selected 
   */
  variant?: 'simple' | 'boxed';
  /** Optional icon/element to show on the far right (e.g. Chevron) */
  rightElement?: ReactNode;
  /** If true, and a rightElement exists, it will rotate 180deg when checked */
  rotateIconOnCheck?: boolean;
}

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    { 
      label, 
      description, 
      hasError = false, 
      variant = 'simple', 
      className = '', 
      disabled, 
      checked, 
      rightElement,
      rotateIconOnCheck = false,
      ...props 
    }, 
    ref
  ) => {
    
    return (
      <label 
        className={`
          rb-container 
          variant-${variant} 
          ${checked ? 'checked' : ''} 
          ${hasError ? 'error' : ''} 
          ${disabled ? 'disabled' : ''}
          ${className}
        `}
      >
        {/* Native Input (Hidden but accessible) */}
        <input
          type="radio"
          className="rb-input"
          disabled={disabled}
          checked={checked}
          ref={ref}
          {...props}
        />

        {/* Visual Radio Circle */}
        <div className="rb-visual-wrapper">
          <div className="rb-outer-circle" />
          <div className="rb-inner-dot" />
        </div>

        {/* Text Content */}
        <div className="rb-content">
          <div className="rb-label">{label}</div>
          {description && (
            <div className="rb-description">{description}</div>
          )}
        </div>

        {/* Right Element (Chevron) */}
        {rightElement && (
          <div className={`rb-right-element ${checked && rotateIconOnCheck ? 'rotate-on-check' : ''}`}>
            {rightElement}
          </div>
        )}
      </label>
    );
  }
);

RadioButton.displayName = 'RadioButton';

export default RadioButton;