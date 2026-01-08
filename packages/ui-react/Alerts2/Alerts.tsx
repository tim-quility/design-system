import React, { ReactNode } from 'react';
import './alerts.css';

export interface AlertsProps {
  /**
   * The device context for responsive layout
   * @default 'Mobile'
   */
  device?: 'Mobile' | 'Desktop';

  /**
   * The functional type of the alert
   * @default 'Actionable'
   */
  type?: 'Actionable' | 'Callout';

  /**
   * The semantic status of the alert
   * @default 'Error'
   */
  status?: 'Error' | 'Success' | 'Info' | 'Warning';

  /**
   * Whether the alert includes a dismiss action
   * @default false
   */
  dismissible?: boolean;

  /**
   * Main content of the alert
   */
  children?: ReactNode;

  /**
   * Optional icon element
   */
  icon?: ReactNode;

  /**
   * Text label for the action button.
   * Required if type is 'Actionable'.
   */
  action?: string;

  /**
   * Callback fired when the action button is clicked
   */
  onAction?: () => void;

  /**
   * Callback fired when the dismiss icon is clicked
   */
  onDismiss?: () => void;
}

export const Alerts: React.FC<AlertsProps> = ({
  device = 'Mobile',
  type = 'Actionable',
  status = 'Error',
  dismissible = false,
  children,
  icon,
  action,
  onAction,
  onDismiss,
}) => {
  // Generate root class names based on BEM methodology
  const rootClasses = [
    'ds-alert',
    `ds-alert--${device.toLowerCase()}`,
    `ds-alert--${type.toLowerCase()}`,
    `ds-alert--${status.toLowerCase()}`,
  ].join(' ');

  return (
    <div className={rootClasses} role="alert">
      <div className="ds-alert__main">
        {icon && <div className="ds-alert__icon-slot">{icon}</div>}
        <div className="ds-alert__content">{children}</div>
      </div>

      {(type === 'Actionable' || dismissible) && (
        <div className="ds-alert__interactive-group">
          {type === 'Actionable' && action && (
            <button 
              className="ds-alert__action-slot" 
              onClick={onAction}
              type="button"
            >
              {action}
            </button>
          )}

          {dismissible && (
            <button 
              className="ds-alert__dismiss-slot" 
              onClick={onDismiss}
              type="button"
              aria-label="Dismiss"
            >
              <svg 
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M9 3L3 9M3 3L9 9" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
};