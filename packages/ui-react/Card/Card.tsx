import React, { ReactNode } from 'react';
import './Card.css';

export interface CardProps {
  title: string;
  description: string;
  /** The icon or element to display in the top right corner */
  topRightIcon?: ReactNode;
  /** Duration text (e.g. "1 hour") */
  duration?: string;
  /** Icon for the duration field */
  durationIcon?: ReactNode;
  /** Type/Label text (e.g. "Certification") */
  typeLabel?: string;
  /** Icon for the type field */
  typeIcon?: ReactNode;
  /** Optional click handler */
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  topRightIcon,
  duration,
  durationIcon,
  typeLabel,
  typeIcon,
  onClick,
  className = ''
}) => {
  return (
    <div 
      className={`card-container ${className}`} 
      onClick={onClick}
      // Add keyboard support if clickable
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
    >
      <div className="card-body">
        {/* Header: Title + Top Icon */}
        <div className="card-header">
          <div className="card-title">{title}</div>
          {topRightIcon && (
            <div className="card-top-icon">
              {topRightIcon}
            </div>
          )}
        </div>

        {/* Description */}
        <div className="card-description">
          {description}
        </div>
      </div>

      {/* Footer: Metadata */}
      <div className="card-footer">
        
        {/* Duration Meta Item */}
        {duration && (
          <div className="meta-item">
            {durationIcon && (
              <div className="meta-icon-wrapper">
                {durationIcon}
              </div>
            )}
            <div className="meta-text">{duration}</div>
          </div>
        )}

        {/* Type/Label Meta Item */}
        {typeLabel && (
          <div className="meta-item">
            {typeIcon && (
              <div className="meta-icon-wrapper">
                {typeIcon}
              </div>
            )}
            <div className="meta-text">{typeLabel}</div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Card;