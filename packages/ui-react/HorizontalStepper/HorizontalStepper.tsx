import React, { useMemo } from 'react';
import './horizontal-stepper.css';

// --- Types ---
export interface Step {
  id: string;
  name: string;
  description: string;
}

export interface HorizontalStepperProps {
  steps: Step[];
  currentStepId: string;
  className?: string;
}

// --- Internal Icons ---
const CheckIcon = () => (
  <svg
  width="14"
  height="14"
  viewBox="0 0 16 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  aria-hidden="true"
>
  <path
    d="M13 4.5L6.5 11L3 7.5"
    stroke="currentColor"
    stroke-width="1.75"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>

);

// --- Component ---
export const HorizontalStepper: React.FC<HorizontalStepperProps> = ({ 
  steps, 
  currentStepId,
  className = ''
}) => {
  
  // Calculate active index for comparison
  const currentStepIndex = useMemo(() => {
    return steps.findIndex(s => s.id === currentStepId);
  }, [steps, currentStepId]);

  return (
    <div className={`hs-container ${className}`}>
      <div className="hs-wrapper">
        {steps.map((step, index) => {
          // Determine status
          let status: 'complete' | 'current' | 'upcoming' = 'upcoming';
          if (index < currentStepIndex) status = 'complete';
          if (index === currentStepIndex) status = 'current';

          return (
            <div 
              key={step.id} 
              className="hs-step-item"
              data-status={status}
            >
              {/* Top Progress Bar */}
              <div className="hs-bar" />
              
              {/* Text Content */}
              <div className="hs-content">
                
                {/* Label Row */}
                <div className="hs-label-row">
                  <div className="hs-indicator-slot">
                    {status === 'complete' && <CheckIcon />}
                    {status === 'current' && <div className="hs-dot-active" />}
                    {status === 'upcoming' && <div className="hs-dot-empty" />}
                  </div>
                  <span className="hs-label">{step.name}</span>
                </div>
                
                {/* Description Row */}
                <div className="hs-description-row">
                  <span className="hs-description">{step.description}</span>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};