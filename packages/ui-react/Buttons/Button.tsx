import React, { forwardRef } from 'react';
import type {
  ButtonProps,
  ButtonHierarchy,
  ButtonSize,
  ButtonIntent,
  ButtonState,
  ResolvedButtonState,
} from './Button.types';
import './Buttons.css';

/**
 * Helper to generate BEM-style class names for the button
 */
function getButtonClasses(state: ResolvedButtonState): string {
  const classes = [
    'ds-button',
    `ds-button--${state.hierarchy}`,
    `ds-button--${state.size}`,
    `ds-button--${state.intent}`,
    `ds-button--${state.state}`,
  ];

  if (state.hasIcon) {
    classes.push(`ds-button--icon-${state.iconPosition}`);
  }

  if (state.isIconOnly) {
    classes.push('ds-button--icon-only');
  }

  return classes.join(' ');
}

/**
 * Button — A versatile, accessible, design-system button component.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      hierarchy = 'primary',
      size = 'md',
      intent = 'default',
      icon,
      iconPosition = icon ? 'start' : undefined,
      isLoading = false,
      disabled = false,
      ariaLabel,
      children,
      className = '',
      type = 'button',
      onClick,
      ...rest
    },
    ref,
  ) => {
    const [isHovering, setIsHovering] = React.useState(false);
    const [isActive, setIsActive] = React.useState(false);

    // Resolve visual state
    let state: ButtonState = 'default';
    if (isLoading) state = 'loading';
    else if (disabled) state = 'disabled';
    else if (isActive) state = 'active';
    else if (isHovering) state = 'hover';

    const isIconOnly = icon && !children;
    const hasIcon = !!icon;

    const resolved: ResolvedButtonState = {
      hierarchy: hierarchy as ButtonHierarchy,
      size: size as ButtonSize,
      intent: intent as ButtonIntent,
      state,
      hasIcon,
      iconPosition: (iconPosition || 'start') as 'start' | 'end' | 'only',
      isIconOnly: isIconOnly || false,
    };

    const buttonClasses = getButtonClasses(resolved);
    const mergedClasses = [buttonClasses, className].filter(Boolean).join(' ');

    let finalAriaLabel = ariaLabel;
    if (isIconOnly && !finalAriaLabel) {
      console.warn(
        '[Button] Icon-only button without ariaLabel. Add ariaLabel prop for accessibility.',
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={mergedClasses}
        aria-label={finalAriaLabel}
        aria-busy={isLoading}
        onMouseEnter={() => !disabled && !isLoading && setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseDown={() => !disabled && !isLoading && setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        onClick={(e) => {
          if (onClick && !disabled && !isLoading) onClick(e);
        }}
        {...rest}
      >
        {isLoading ? (
          <>
            <span className="ds-button__spinner" aria-hidden="true">
              ⟳
            </span>
            {children && <span style={{ visibility: 'hidden' }}>{children}</span>}
          </>
        ) : (
          <>
            {icon && <span className="ds-button__icon">{icon}</span>}
            {children && <span className="ds-button__label">{children}</span>}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
