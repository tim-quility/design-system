import React, { useState, ReactNode } from 'react';
import './TextField.css';

// --- Icons (SVG) ---
const InfoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="0.5" y="0.5" width="13" height="13" rx="6.5" stroke="#1849A9" />
    <path d="M7 6.333V10.333" stroke="#1849A9" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="7" cy="3.666" r="1" fill="#1849A9" />
  </svg>
);

const ErrorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333Z" stroke="#B42318" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 6.66666V10" stroke="#B42318" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 13.3333H10.0083" stroke="#B42318" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ResizeHandle = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
    <path d="M10 1L10 10L1 10" stroke="#2F2F2F" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// --- FIXED TYPES ---

// 1. Create a merged type that allows props from both <input> and <textarea>
// We use Partial<> to ensure we don't demand properties that exist on one but not the other.
type MergedHTMLAttributes = React.InputHTMLAttributes<HTMLInputElement> & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

// 2. We Omit 'prefix' (conflict with RDFa) and 'onChange' (conflict between targets)
interface TextFieldProps extends Omit<MergedHTMLAttributes, 'prefix' | 'onChange'> {
  label: string;
  hint?: string;
  error?: boolean | string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  multiline?: boolean;

  // 3. Redefine onChange to accept EITHER input or textarea events
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  hint,
  error,
  prefix,
  suffix,
  multiline = false,
  required,
  disabled,
  readOnly,
  className,
  onFocus,
  onBlur,
  type = 'text',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const displayHint = typeof error === 'string' ? error : hint;
  const isError = !!error;

  let wrapperClass = 'tf-wrapper';
  if (disabled) wrapperClass += ' is-disabled';
  else if (readOnly) wrapperClass += ' is-readonly';
  else if (isError) wrapperClass += ' is-error';
  else if (isFocused) wrapperClass += ' is-focused';

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e as any);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e as any);
  };

  // Determine the tag
  const Component = multiline ? 'textarea' : 'input';

  return (
    <div className={`tf-container ${className || ''}`}>
      <div className="tf-label-row">
        <span className="tf-label">{label}</span>
        {required && <span className="tf-required">*</span>}
        <div className="tf-info-icon" title="More Information">
          <InfoIcon />
        </div>
      </div>

      <div className={wrapperClass}>
        {prefix && <div className="tf-affix">{prefix}</div>}

        <Component
          className="tf-input"
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          onFocus={handleFocus}
          onBlur={handleBlur}
          type={multiline ? undefined : type}
          // We cast props to 'any' here.
          // Why? TypeScript gets confused trying to spread InputProps onto a Textarea and vice versa.
          // Since we are controlling 'multiline', we trust the consumer to pass valid props.
          {...(props as any)}
        />

        {suffix && <div className="tf-affix is-bold">{suffix}</div>}

        {isError && !disabled && !readOnly && (
          <div className="tf-icon-box">
            <ErrorIcon />
          </div>
        )}

        {multiline && !disabled && !readOnly && (
          <div className="tf-resize-handle">
            <ResizeHandle />
          </div>
        )}
      </div>

      {displayHint && (
        <div className={`tf-helper-text ${isError ? 'is-error' : ''}`}>
          {displayHint}
        </div>
      )}
    </div>
  );
};

export default TextField;