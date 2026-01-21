import React from 'react';
import './Toggle.css';

interface ToggleProps {
    /** The supporting text displayed above the toggle */
    label?: string;
    /** Whether the toggle is ON */
    checked: boolean;
    /** Callback when state changes */
    onChange: (checked: boolean) => void;
    /** If true, shows "On" or "Off" text next to the switch */
    showStateLabel?: boolean;
    /** Standard disabled state */
    disabled?: boolean;
    /** If true, uses Error color (Red) instead of Brand color (Green) when active */
    isError?: boolean;
    className?: string;
}

const Toggle: React.FC<ToggleProps> = ({
    label,
    checked,
    onChange,
    showStateLabel = false,
    disabled = false,
    isError = false,
    className = '',
}) => {

    const handleClick = () => {
        if (!disabled) {
            onChange(!checked);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
        }
    };

    // Construct class names
    let switchClass = 'toggle-switch';
    if (checked) switchClass += ' is-checked';
    if (isError) switchClass += ' is-error';

    return (
        <div className={`toggle-root ${className}`}>
            {/* Optional Top Label (Supporting Text) */}
            {label && <div className="toggle-main-label">{label}</div>}

            <div className="toggle-row">
                {/* The Switch Button */}
                <button
                    type="button"
                    role="switch"
                    aria-checked={checked}
                    aria-label={label || 'Toggle'}
                    disabled={disabled}
                    className={switchClass}
                    onClick={handleClick}
                    onKeyDown={handleKeyDown}
                >
                    <div className="toggle-thumb" />
                </button>

                {/* Optional Side Text (On/Off) */}
                {showStateLabel && (
                    <div className="toggle-side-text">
                        {checked ? 'On' : 'Off'}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Toggle;