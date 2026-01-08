import React, { ReactNode } from 'react';
import './alerts.css';

export interface AlertsProps {
  /**
   * The functional type of the alert
   * @default 'actionable'
   */
  type?: 'actionable' | 'callout';

  /**
   * The semantic status of the alert
   * @default 'error'
   */
  status?: 'error' | 'success' | 'info' | 'warning';

  /**
   * Whether the alert includes a dismiss action
   * @default false
   */
  dismissible?: boolean;

  /**
   * Primary icon element
   */
  icon?: ReactNode;

  /**
   * Action element (e.g., Button)
   * Only rendered if type is 'actionable'
   */
  action?: ReactNode;

  /**
   * Icon element for the dismiss button
   */
  dismissIcon?: ReactNode;

  /**
   * Callback fired when dismiss is clicked
   */
  onDismiss?: () => void;

  /**
   * Content of the alert
   */
  children?: ReactNode;

  /**
   * Optional additional class names
   */
  className?: string;
}

export const Alerts = ({
    type = 'actionable',
    status = 'error',
    dismissible = false,
    icon,
    action,
    dismissIcon,
    onDismiss,
    children,
    className = '',
}: AlertsProps) => {
    const rootClasses = [
        'ds-alert',
        `ds-alert--type-${type}`,
        `ds-alert--status-${status}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={rootClasses} role="alert">
            {/* Left Side: Icon + Content */}
            <div className="ds-alert__main">
                {icon && (
                <div className="ds-alert__icon-slot">
                    {icon}
                </div>
                )}
                
                <div className="ds-alert__content">
                {children}
                </div>
            </div>

            {/* Right Side: Action + Dismiss */}
            {(action || dismissible) && (
                <div className="ds-alert__interactive-group">
                    {/* Action Button */}
                    {type === 'actionable' && action && (
                        <div className="ds-alert__action-slot">
                        {action}
                        </div>
                    )}

                    {/* Dismiss Button */}
                    {dismissible && (
                        <button 
                        type="button" 
                        className="ds-alert__dismiss-slot"
                        onClick={onDismiss}
                        aria-label="Dismiss"
                        >
                        {dismissIcon}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};