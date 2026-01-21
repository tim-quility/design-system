import React from 'react';
import './Alert.css';

/**
 * Reusable Alert Component
 * @param {string} type - 'info', 'error', 'success' (Defaults to 'info')
 * @param {string} title - The header text
 * @param {ReactNode} icon - Optional icon component (e.g. <Icon name="..." />)
 * @param {ReactNode} children - The main content
 */
const Alert = ({ 
    type = 'info', 
    title, 
    icon, 
    children, 
    className = '' 
}) => {
    
    // Construct class names dynamically based on type
    const rootClass = `ds-alert ds-alert--${type} ${className}`;

    return (
        <div className={rootClass} role="alert">
            <div className="ds-alert__header">
                {/* Render icon if provided */}
                {icon && <span className="ds-alert__icon">{icon}</span>}
                {title}
            </div>
            
            <div className="ds-alert__content">
                {children}
            </div>
        </div>
    );
};

export default Alert;