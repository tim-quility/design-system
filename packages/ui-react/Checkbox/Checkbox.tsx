import React, { InputHTMLAttributes, ReactNode } from 'react';
import './Checkbox.css';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Label text displayed next to the checkbox */
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

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
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
          cb-container 
          variant-${variant} 
          ${checked ? 'checked' : ''} 
          ${hasError ? 'error' : ''} 
          ${disabled ? 'disabled' : ''}
          ${className}
        `}
      >
        {/* Native Input (Hidden but accessible) */}
        <input
          type="checkbox"
          className="cb-input"
          disabled={disabled}
          checked={checked}
          ref={ref}
          {...props}
        />

        {/* Visual Checkbox Square */}
        <div className="cb-visual-wrapper">
          <div className="cb-box">
             {/* SVG Checkmark */}
             <svg 
                className="cb-checkmark" 
                viewBox="0 0 14 14" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
             >
                <path 
                  d="M11.6666 3.5L5.24992 9.91667L2.33325 7" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
             </svg>
          </div>
        </div>

        {/* Text Content */}
        <div className="cb-content">
          <div className="cb-label">{label}</div>
          {description && (
            <div className="cb-description">{description}</div>
          )}
        </div>

        {/* Right Element (e.g. Chevron) */}
        {rightElement && (
          <div className={`cb-right-element ${checked && rotateIconOnCheck ? 'rotate-on-check' : ''}`}>
            {rightElement}
          </div>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;